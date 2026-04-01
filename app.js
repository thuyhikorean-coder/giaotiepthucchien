document.addEventListener('DOMContentLoaded', () => {
    // --- State Management ---
    let currentCards = [];
    let currentIndex = 0;
    let userProgress = JSON.parse(localStorage.getItem('hk_progress_1000')) || {};
    let loggedInLead = JSON.parse(localStorage.getItem('hk_lead_info_v7')) || null;
    let hasJoinedFB = false;
    let hasJoinedZalo = false;
    let currentTopicId = 'all';

    // --- DOM Elements ---
    const eAuthScreen = document.getElementById('authScreen');
    const eLeadName = document.getElementById('leadName');
    const eLeadZalo = document.getElementById('leadZalo');
    const eLeadGoal = document.getElementById('leadGoal');
    const eLeadConsult = document.getElementById('leadConsult');
    const eBtnJoinFB = document.getElementById('btnJoinFB');
    const eBtnJoinZalo = document.getElementById('btnJoinZalo');
    const eLeadError = document.getElementById('leadError');
    const eLeadLoginBtn = document.getElementById('leadLoginBtn');

    const eHomeScreen = document.getElementById('homeScreen');
    const eTopicsGrid = document.getElementById('topicsGrid');
    const eHomeWelcomeMessage = document.getElementById('homeWelcomeMessage');
    
    const eMainApp = document.getElementById('mainApp');
    const eBackToHomeBtn = document.getElementById('backToHomeBtn');
    const eCurrentTopicTitle = document.getElementById('currentTopicTitle');
    
    const eCardTopic = document.getElementById('cardTopic');
    const eCardLevel = document.getElementById('cardLevel');
    const eKoreanText = document.getElementById('koreanText');
    const eRomanization = document.getElementById('romanization');
    const eVietnamese = document.getElementById('vietnamese');
    
    const eToggleMeaningBtn = document.getElementById('toggleMeaningBtn');
    const eCardDetails = document.getElementById('cardDetails');
    const eBookmarkBtn = document.getElementById('bookmarkBtn');
    
    const ePlayBtn = document.getElementById('playAudioBtn');
    const eMarkLearnedBtn = document.getElementById('markLearnedBtn');
    
    const ePrevBtn = document.getElementById('prevBtn');
    const eNextBtn = document.getElementById('nextBtn');
    const eCurrentIndex = document.getElementById('currentIndex');
    const eTotalCards = document.getElementById('totalCards');
    
    const eProgressPercentage = document.getElementById('progressPercentage');
    const eProgressFill = document.getElementById('progressFill');
    const eLearnedCount = document.getElementById('learnedCount');
    const eTotalCount = document.getElementById('totalCount');

    // Mảng ảnh cho grid
    const topicImages = [
        'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=400', // Sân bay
        'https://images.unsplash.com/photo-1580227181516-0fcba81643cb?auto=format&fit=crop&q=80&w=400', // SIM / Đổi tiền
        'https://images.unsplash.com/photo-1596728448897-4a00508a8e3f?auto=format&fit=crop&q=80&w=400', // Hỏi đường taxi
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400', // Khách sạn
        'https://images.unsplash.com/photo-1580651315530-69c8e0026dd7?auto=format&fit=crop&q=80&w=400', // Nhà hàng 1
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400', // Nhà hàng 2
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=400', // Mua sắm
        'https://images.unsplash.com/photo-1515088553535-71be0b073289?auto=format&fit=crop&q=80&w=400', // Tàu điện
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400', // Bệnh viện
        'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400', // Tiện lợi
        'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=400'  // Du lịch
    ];

    // --- Initialization ---
    function init() {
        if (loggedInLead) {
            showHomeScreen();
        } else {
            showAuthScreen();
            eLeadLoginBtn.addEventListener('click', handleLeadLogin);
        }

        // Event Listeners
        if (eBtnJoinFB) {
            eBtnJoinFB.addEventListener('click', () => {
                hasJoinedFB = true;
                eBtnJoinFB.innerHTML = '<i class="fas fa-check-circle" style="margin-right: 12px; font-size: 1.2rem;"></i> 1. Đã vào Group Facebook';
                eBtnJoinFB.style.background = 'var(--success)';
            });
        }
        if (eBtnJoinZalo) {
            eBtnJoinZalo.addEventListener('click', () => {
                hasJoinedZalo = true;
                eBtnJoinZalo.innerHTML = '<i class="fas fa-check-circle" style="margin-right: 12px; font-size: 1.2rem;"></i> 2. Đã theo dõi Zalo OA';
                eBtnJoinZalo.style.background = 'var(--success)';
            });
        }

        if(eBackToHomeBtn) {
            eBackToHomeBtn.addEventListener('click', showHomeScreen);
        }
        
        ePrevBtn.addEventListener('click', () => {
            if (currentIndex > 0) loadCard(currentIndex - 1);
        });
        
        eNextBtn.addEventListener('click', () => {
            if (currentIndex < currentCards.length - 1) loadCard(currentIndex + 1);
        });
        
        eToggleMeaningBtn.addEventListener('click', toggleMeaning);
        ePlayBtn.addEventListener('click', playAudio);
        
        eMarkLearnedBtn.addEventListener('click', markAsLearned);
        eBookmarkBtn.addEventListener('click', toggleBookmark);
    }
    
    function showAuthScreen() {
        eAuthScreen.style.display = 'flex';
        eHomeScreen.style.display = 'none';
        eMainApp.style.display = 'none';
    }

    function handleLeadLogin() {
        const name = eLeadName.value.trim();
        const zalo = eLeadZalo.value.trim();
        const goal = eLeadGoal.value.trim();
        const wantsConsult = eLeadConsult.checked;

        if (!name || !zalo || !goal) {
            eLeadError.textContent = "Vui lòng nhập đầy đủ Họ Tên, Zalo và Mục tiêu học.";
            eLeadError.style.display = "block";
            return;
        }

        if (!hasJoinedFB || !hasJoinedZalo) {
            eLeadError.textContent = "Bạn ơi, hãy nhấp vào 2 nút Bắt buộc phía trên để vào học nhé!";
            eLeadError.style.display = "block";
            return;
        }

        eLeadError.style.display = "none";
        eLeadLoginBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang kết nối...';
        eLeadLoginBtn.disabled = true;

        // THAY ĐƯỜNG LINK GOOGLE APPS SCRIPT VÀO ĐÂY:
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyuwIMySjwqkTdSo9abkZMQibNrJBn2kGtT0ngQ_rLluQv2Qv008EILuNn6yIh-cPX_/exec";

        const formData = new FormData();
        formData.append("name", name);
        formData.append("zalo", zalo);
        formData.append("goal", goal);
        formData.append("wantsConsult", wantsConsult ? "Có" : "Không");
        formData.append("source", "Web 1000 Câu");

        const processLogin = () => {
            const leadInfo = { name, zalo, goal, wantsConsult };
            localStorage.setItem('hk_lead_info_v7', JSON.stringify(leadInfo));
            loggedInLead = leadInfo;
            eLeadLoginBtn.innerHTML = 'VÀO HỌC NGAY 🚀';
            eLeadLoginBtn.disabled = false;
            showHomeScreen();
        };

        if (SCRIPT_URL === "URL_GOOGLE_APPS_SCRIPT_CUA_CHI_O_DAY") {
            // Chưa thay link -> bypass để test
            processLogin();
        } else {
            // Gửi dữ liệu về Google Sheets
            fetch(SCRIPT_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            })
            .then(response => {
                processLogin();
            })
            .catch(error => {
                console.error("Lỗi gửi dữ liệu:", error);
                processLogin();
            });
        }
    }

    function showHomeScreen() {
        eAuthScreen.style.display = 'none';
        eMainApp.style.display = 'none';
        eHomeScreen.style.display = 'flex';
        eHomeScreen.style.flexDirection = 'column';
        
        if (loggedInLead && eHomeWelcomeMessage) {
            eHomeWelcomeMessage.textContent = `Xin chào ${loggedInLead.name}! Chọn chủ đề để bắt đầu.`;
        }

        renderTopicsGrid();
    }
    
    function renderTopicsGrid() {
        if (!eTopicsGrid) return;
        eTopicsGrid.innerHTML = '';
        
        const cardStyles = [
            { emoji: '✈️', color: 'linear-gradient(135deg, #E0F7FA, #B2EBF2)' },
            { emoji: '💱', color: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)' },
            { emoji: '🚕', color: 'linear-gradient(135deg, #FFF9C4, #FFF59D)' },
            { emoji: '🏨', color: 'linear-gradient(135deg, #E8EAF6, #C5CAE9)' },
            { emoji: '🍜', color: 'linear-gradient(135deg, #FBE9E7, #FFCCBC)' },
            { emoji: '🥩', color: 'linear-gradient(135deg, #FCE4EC, #F8BBD0)' },
            { emoji: '🛍️', color: 'linear-gradient(135deg, #F3E5F5, #E1BEE7)' },
            { emoji: '🚇', color: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)' },
            { emoji: '🏥', color: 'linear-gradient(135deg, #FFEBEE, #FFCDD2)' },
            { emoji: '🏪', color: 'linear-gradient(135deg, #FFFDE7, #FFF59D)' },
            { emoji: '🇰🇷', color: 'linear-gradient(135deg, #E0F2F1, #B2DFDB)' }
        ];

        let index = 0;
        for (const [key, value] of Object.entries(topics)) {
            if (key === 'all') continue;
            
            const card = document.createElement('div');
            card.className = 'topic-card';
            
            const style = cardStyles[index] || { emoji: '📚', color: 'linear-gradient(135deg, #F5F5F5, #E0E0E0)' };
            card.style.setProperty('--card-bg', style.color);
            
            // Format nice title
            let niceTitle = value;
            let subDesc = 'Chạm để học';
            if (niceTitle.includes(':')) {
                const parts = niceTitle.split(':');
                niceTitle = parts[1].trim();
                subDesc = parts[0].trim();
            }

            card.innerHTML = `
                <div class="topic-emoji">${style.emoji}</div>
                <div class="topic-content">
                    <div class="topic-title">${niceTitle}</div>
                    <div class="topic-desc">${subDesc}</div>
                </div>
            `;
            
            card.onclick = () => openTopic(key, value);
            eTopicsGrid.appendChild(card);
            index++;
        }
    }
    
    function openTopic(topicId, topicName) {
        currentTopicId = topicId;
        eHomeScreen.style.display = 'none';
        eMainApp.style.display = 'flex';
        eMainApp.style.flexDirection = 'column';
        
        if (eCurrentTopicTitle) {
            // Remove "Tình huống X:" from title just keep main name if we want, or keep full
            eCurrentTopicTitle.textContent = topicName.includes(':') ? topicName.split(':')[1].trim() : topicName;
        }

        filterCards();
    }

    function filterCards() {
        currentCards = sentenceData.filter(card => {
            return currentTopicId === 'all' || card.topic === currentTopicId;
        });

        if (currentCards.length === 0) {
            eKoreanText.innerHTML = "Không tìm thấy câu nào.";
            eCardDetails.classList.remove('show');
            eToggleMeaningBtn.style.display = 'none';
        } else {
            eToggleMeaningBtn.style.display = 'flex';
            loadCard(0);
        }
        updateProgressUI();
    }

    function loadCard(index) {
        if (currentCards.length === 0) return;
        
        currentIndex = index;
        const card = currentCards[index];

        // Update UI
        eCardTopic.textContent = card.topic.replace('tinh-huong-', 'T.Huống ');
        eCardLevel.textContent = `Câu số ${card.id}`;
        eKoreanText.textContent = card.korean;
        
        if (card.romanization) {
            eRomanization.textContent = `[${card.romanization}]`;
            eRomanization.style.display = 'block';
        } else {
            eRomanization.style.display = 'none';
        }
        
        eVietnamese.textContent = card.vietnamese;
        
        // Reset card state
        eCardDetails.classList.remove('show');
        eToggleMeaningBtn.classList.remove('open');
        eToggleMeaningBtn.innerHTML = 'Bạn đã biết nghĩa câu này? <span>Bấm để xem đáp án</span> <i class="fa-solid fa-chevron-down"></i>';
        
        // Update nav
        eCurrentIndex.textContent = currentIndex + 1;
        eTotalCards.textContent = currentCards.length;
        ePrevBtn.disabled = currentIndex === 0;
        eNextBtn.disabled = currentIndex === currentCards.length - 1;

        // Bookmark state
        if (userProgress[card.id] && userProgress[card.id].bookmarked) {
            eBookmarkBtn.classList.add('active');
            eBookmarkBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
        } else {
            eBookmarkBtn.classList.remove('active');
            eBookmarkBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
        }
        
        // Learned state
        if (userProgress[card.id] && userProgress[card.id].learned) {
            eMarkLearnedBtn.innerHTML = '<i class="fa-solid fa-check-double"></i> Đã nhớ';
            eMarkLearnedBtn.style.background = 'var(--success)';
        } else {
            eMarkLearnedBtn.innerHTML = '<i class="fa-solid fa-check"></i> Đánh dấu đã nhớ';
            eMarkLearnedBtn.style.background = 'transparent';
            eMarkLearnedBtn.style.color = 'var(--text-main)';
            eMarkLearnedBtn.style.border = '1px solid var(--primary)';
        }
    }

    function toggleMeaning() {
        eCardDetails.classList.toggle('show');
        eToggleMeaningBtn.classList.toggle('open');
        if (eCardDetails.classList.contains('show')) {
            eToggleMeaningBtn.innerHTML = 'Thu gọn nghĩa <i class="fa-solid fa-chevron-up"></i>';
        } else {
            eToggleMeaningBtn.innerHTML = 'Bạn đã biết nghĩa câu này? <span>Bấm để xem đáp án</span> <i class="fa-solid fa-chevron-down"></i>';
        }
    }

    function playAudio() {
        const text = currentCards[currentIndex].korean;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ko-KR';
        utterance.rate = 0.85; // Giọng hơi chậm để bắt chước
        window.speechSynthesis.speak(utterance);
    }

    function markAsLearned() {
        const currentCard = currentCards[currentIndex];
        
        if (!userProgress[currentCard.id]) {
            userProgress[currentCard.id] = {};
        }
        userProgress[currentCard.id].learned = true;
        
        // Save to local storage
        localStorage.setItem('hk_progress_1000', JSON.stringify(userProgress));
        
        updateProgressUI();
        
        eMarkLearnedBtn.innerHTML = '<i class="fa-solid fa-check-double"></i> Đã nhớ';
        eMarkLearnedBtn.style.background = 'var(--success)';
        eMarkLearnedBtn.style.color = 'white';
        eMarkLearnedBtn.style.border = 'none';
        
        setTimeout(() => {
            if (currentIndex < currentCards.length - 1) {
                loadCard(currentIndex + 1);
            }
        }, 500);
    }

    function toggleBookmark() {
        const currentCard = currentCards[currentIndex];
        
        if (!userProgress[currentCard.id]) {
            userProgress[currentCard.id] = {};
        }
        
        userProgress[currentCard.id].bookmarked = !userProgress[currentCard.id].bookmarked;
        
        if (userProgress[currentCard.id].bookmarked) {
            eBookmarkBtn.classList.add('active');
            eBookmarkBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
        } else {
            eBookmarkBtn.classList.remove('active');
            eBookmarkBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
        }
        
        localStorage.setItem('hk_progress_1000', JSON.stringify(userProgress));
    }

    function updateProgressUI() {
        const currentFilterTotal = currentCards.length;
        let currentFilterLearned = 0;
        
        if(currentCards.length > 0) {
            currentCards.forEach(card => {
                if(userProgress[card.id] && userProgress[card.id].learned) currentFilterLearned++;
            });
            const percent = currentFilterTotal > 0 ? Math.floor((currentFilterLearned / currentFilterTotal) * 100) : 0;
            
            if (eProgressPercentage) eProgressPercentage.textContent = `${percent}%`;
            if (eProgressFill) eProgressFill.style.width = `${percent}%`;
            if (eLearnedCount) eLearnedCount.textContent = currentFilterLearned;
            if (eTotalCount) eTotalCount.textContent = currentFilterTotal;
        }
    }

    // Start App
    init();
});
