const sentenceData = [
    {
        "id": 1,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "안녕하세요.",
        "vietnamese": "Xin chào.",
        "romanization": ""
    },
    {
        "id": 2,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "여권을 보여 주세요.",
        "vietnamese": "Vui lòng cho tôi xem hộ chiếu.",
        "romanization": ""
    },
    {
        "id": 3,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "여권 여기 있습니다.",
        "vietnamese": "Đây là hộ chiếu của tôi.",
        "romanization": ""
    },
    {
        "id": 4,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "어디에서 오셨습니까?",
        "vietnamese": "Bạn đến từ đâu?",
        "romanization": ""
    },
    {
        "id": 5,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "베트남에서 왔습니다.",
        "vietnamese": "Tôi đến từ Việt Nam.",
        "romanization": ""
    },
    {
        "id": 6,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "방문 목적이 무엇입니까?",
        "vietnamese": "Mục đích chuyến đi của bạn là gì?",
        "romanization": ""
    },
    {
        "id": 7,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "관광하러 왔습니다.",
        "vietnamese": "Tôi đến để du lịch.",
        "romanization": ""
    },
    {
        "id": 8,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "출장으로 왔습니다.",
        "vietnamese": "Tôi đến công tác.",
        "romanization": ""
    },
    {
        "id": 9,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "얼마 동안 머무를 예정입니까?",
        "vietnamese": "Bạn dự định ở bao lâu?",
        "romanization": ""
    },
    {
        "id": 10,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "일주일 동안 머무를 예정입니다.",
        "vietnamese": "Tôi dự định ở một tuần.",
        "romanization": ""
    },
    {
        "id": 11,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "어디에서 머무르십니까?",
        "vietnamese": "Bạn sẽ ở đâu?",
        "romanization": ""
    },
    {
        "id": 12,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "호텔에 머무를 예정입니다.",
        "vietnamese": "Tôi sẽ ở khách sạn.",
        "romanization": ""
    },
    {
        "id": 13,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "호텔 예약을 했습니까?",
        "vietnamese": "Bạn đã đặt khách sạn chưa?",
        "romanization": ""
    },
    {
        "id": 14,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "네, 예약했습니다.",
        "vietnamese": "Vâng, tôi đã đặt rồi.",
        "romanization": ""
    },
    {
        "id": 15,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "예약 확인서를 보여 주세요.",
        "vietnamese": "Vui lòng cho xem xác nhận đặt phòng.",
        "romanization": ""
    },
    {
        "id": 16,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "여기 있습니다.",
        "vietnamese": "Đây ạ.",
        "romanization": ""
    },
    {
        "id": 17,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "왕복 항공권이 있습니까?",
        "vietnamese": "Bạn có vé khứ hồi không?",
        "romanization": ""
    },
    {
        "id": 18,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, tôi có.",
        "romanization": ""
    },
    {
        "id": 19,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "언제 출국할 예정입니까?",
        "vietnamese": "Bạn dự định rời đi khi nào?",
        "romanization": ""
    },
    {
        "id": 20,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "일주일 후에 출국합니다.",
        "vietnamese": "Tôi sẽ rời đi sau một tuần.",
        "romanization": ""
    },
    {
        "id": 21,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐이 몇 개입니까?",
        "vietnamese": "Bạn có mấy kiện hành lý?",
        "romanization": ""
    },
    {
        "id": 22,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "두 개 있습니다.",
        "vietnamese": "Tôi có hai kiện.",
        "romanization": ""
    },
    {
        "id": 23,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "위탁 수하물이 있습니까?",
        "vietnamese": "Bạn có hành lý ký gửi không?",
        "romanization": ""
    },
    {
        "id": 24,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 25,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "기내 수하물만 있습니다.",
        "vietnamese": "Tôi chỉ có hành lý xách tay.",
        "romanization": ""
    },
    {
        "id": 26,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "이 가방 안에 무엇이 있습니까?",
        "vietnamese": "Trong túi này có gì?",
        "romanization": ""
    },
    {
        "id": 27,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "옷과 개인 물건입니다.",
        "vietnamese": "Quần áo và đồ cá nhân.",
        "romanization": ""
    },
    {
        "id": 28,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "음식물이 있습니까?",
        "vietnamese": "Bạn có mang đồ ăn không?",
        "romanization": ""
    },
    {
        "id": 29,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "아니요, 없습니다.",
        "vietnamese": "Không, tôi không có.",
        "romanization": ""
    },
    {
        "id": 30,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "신고할 물건이 있습니까?",
        "vietnamese": "Bạn có đồ cần khai báo không?",
        "romanization": ""
    },
    {
        "id": 31,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "없습니다.",
        "vietnamese": "Không có.",
        "romanization": ""
    },
    {
        "id": 32,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "이 서류를 작성해 주세요.",
        "vietnamese": "Vui lòng điền vào giấy này.",
        "romanization": ""
    },
    {
        "id": 33,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "어디에 서명하면 됩니까?",
        "vietnamese": "Tôi ký ở đâu?",
        "romanization": ""
    },
    {
        "id": 34,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "여기에 서명해 주세요.",
        "vietnamese": "Vui lòng ký ở đây.",
        "romanization": ""
    },
    {
        "id": 35,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "지문을 등록해 주세요.",
        "vietnamese": "Vui lòng lấy dấu vân tay.",
        "romanization": ""
    },
    {
        "id": 36,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "카메라를 보세요.",
        "vietnamese": "Hãy nhìn vào camera.",
        "romanization": ""
    },
    {
        "id": 37,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "사진을 찍겠습니다.",
        "vietnamese": "Tôi sẽ chụp ảnh.",
        "romanization": ""
    },
    {
        "id": 38,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 39,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "잠시만 기다려 주세요.",
        "vietnamese": "Vui lòng chờ một chút.",
        "romanization": ""
    },
    {
        "id": 40,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "문제가 없습니다.",
        "vietnamese": "Không có vấn đề gì.",
        "romanization": ""
    },
    {
        "id": 41,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "한국에 처음 오셨습니까?",
        "vietnamese": "Bạn đến Hàn Quốc lần đầu phải không?",
        "romanization": ""
    },
    {
        "id": 42,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "네, 처음입니다.",
        "vietnamese": "Vâng, lần đầu.",
        "romanization": ""
    },
    {
        "id": 43,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "아니요, 두 번째입니다.",
        "vietnamese": "Không, đây là lần thứ hai.",
        "romanization": ""
    },
    {
        "id": 44,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "한국어를 할 수 있습니까?",
        "vietnamese": "Bạn có thể nói tiếng Hàn không?",
        "romanization": ""
    },
    {
        "id": 45,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "조금 할 수 있습니다.",
        "vietnamese": "Tôi nói được một chút.",
        "romanization": ""
    },
    {
        "id": 46,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "영어 할 수 있습니까?",
        "vietnamese": "Bạn có thể nói tiếng Anh không?",
        "romanization": ""
    },
    {
        "id": 47,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "조금 할 수 있습니다.",
        "vietnamese": "Tôi nói được một chút.",
        "romanization": ""
    },
    {
        "id": 48,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "여행 일정이 있습니까?",
        "vietnamese": "Bạn có lịch trình du lịch không?",
        "romanization": ""
    },
    {
        "id": 49,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 50,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "보여 주세요.",
        "vietnamese": "Vui lòng cho tôi xem.",
        "romanization": ""
    },
    {
        "id": 51,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "한국에서 누구를 만날 예정입니까?",
        "vietnamese": "Bạn sẽ gặp ai ở Hàn Quốc?",
        "romanization": ""
    },
    {
        "id": 52,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "친구를 만날 예정입니다.",
        "vietnamese": "Tôi sẽ gặp bạn.",
        "romanization": ""
    },
    {
        "id": 53,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "혼자 여행하십니까?",
        "vietnamese": "Bạn đi du lịch một mình à?",
        "romanization": ""
    },
    {
        "id": 54,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "네, 혼자입니다.",
        "vietnamese": "Vâng, tôi đi một mình.",
        "romanization": ""
    },
    {
        "id": 55,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "일행이 있습니다.",
        "vietnamese": "Tôi có người đi cùng.",
        "romanization": ""
    },
    {
        "id": 56,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "몇 명입니까?",
        "vietnamese": "Mấy người?",
        "romanization": ""
    },
    {
        "id": 57,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "세 명입니다.",
        "vietnamese": "Ba người.",
        "romanization": ""
    },
    {
        "id": 58,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "그분들은 어디에 있습니까?",
        "vietnamese": "Họ đang ở đâu?",
        "romanization": ""
    },
    {
        "id": 59,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "뒤에 있습니다.",
        "vietnamese": "Họ ở phía sau.",
        "romanization": ""
    },
    {
        "id": 60,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "같이 왔습니다.",
        "vietnamese": "Chúng tôi đến cùng nhau.",
        "romanization": ""
    },
    {
        "id": 61,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐을 검사하겠습니다.",
        "vietnamese": "Tôi sẽ kiểm tra hành lý.",
        "romanization": ""
    },
    {
        "id": 62,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "가방을 열어 주세요.",
        "vietnamese": "Vui lòng mở túi.",
        "romanization": ""
    },
    {
        "id": 63,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "네, 알겠습니다.",
        "vietnamese": "Vâng, tôi hiểu rồi.",
        "romanization": ""
    },
    {
        "id": 64,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "문제가 없습니다.",
        "vietnamese": "Không có vấn đề gì.",
        "romanization": ""
    },
    {
        "id": 65,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "이 물건은 무엇입니까?",
        "vietnamese": "Đây là đồ gì?",
        "romanization": ""
    },
    {
        "id": 66,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "선물입니다.",
        "vietnamese": "Đó là quà.",
        "romanization": ""
    },
    {
        "id": 67,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "누구에게 줄 선물입니까?",
        "vietnamese": "Quà tặng cho ai?",
        "romanization": ""
    },
    {
        "id": 68,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "친구에게 줄 선물입니다.",
        "vietnamese": "Quà tặng cho bạn.",
        "romanization": ""
    },
    {
        "id": 69,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "가격이 얼마입니까?",
        "vietnamese": "Giá bao nhiêu?",
        "romanization": ""
    },
    {
        "id": 70,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "약 20달러입니다.",
        "vietnamese": "Khoảng 20 đô la.",
        "romanization": ""
    },
    {
        "id": 71,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "면세 한도를 알고 있습니까?",
        "vietnamese": "Bạn có biết mức miễn thuế không?",
        "romanization": ""
    },
    {
        "id": 72,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "네, 알고 있습니다.",
        "vietnamese": "Vâng, tôi biết.",
        "romanization": ""
    },
    {
        "id": 73,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "문제가 없습니다.",
        "vietnamese": "Không có vấn đề gì.",
        "romanization": ""
    },
    {
        "id": 74,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "입국 심사가 끝났습니다.",
        "vietnamese": "Thủ tục nhập cảnh đã xong.",
        "romanization": ""
    },
    {
        "id": 75,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "한국에 오신 것을 환영합니다.",
        "vietnamese": "Chào mừng bạn đến Hàn Quốc.",
        "romanization": ""
    },
    {
        "id": 76,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 77,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐 찾는 곳은 어디입니까?",
        "vietnamese": "Nơi nhận hành lý ở đâu?",
        "romanization": ""
    },
    {
        "id": 78,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "저쪽입니다.",
        "vietnamese": "Ở phía kia.",
        "romanization": ""
    },
    {
        "id": 79,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "안내 표지판을 따라가세요.",
        "vietnamese": "Hãy đi theo biển chỉ dẫn.",
        "romanization": ""
    },
    {
        "id": 80,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "도와주셔서 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giúp đỡ.",
        "romanization": ""
    },
    {
        "id": 81,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "좋은 여행 되세요.",
        "vietnamese": "Chúc chuyến đi tốt đẹp.",
        "romanization": ""
    },
    {
        "id": 82,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "즐거운 여행 되세요.",
        "vietnamese": "Chúc bạn có chuyến du lịch vui vẻ.",
        "romanization": ""
    },
    {
        "id": 83,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "문제가 생기면 직원에게 문의하세요.",
        "vietnamese": "Nếu có vấn đề hãy hỏi nhân viên.",
        "romanization": ""
    },
    {
        "id": 84,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "안내 데스크가 어디입니까?",
        "vietnamese": "Quầy thông tin ở đâu?",
        "romanization": ""
    },
    {
        "id": 85,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "저 앞에 있습니다.",
        "vietnamese": "Ở phía trước.",
        "romanization": ""
    },
    {
        "id": 86,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "화장실이 어디입니까?",
        "vietnamese": "Nhà vệ sinh ở đâu?",
        "romanization": ""
    },
    {
        "id": 87,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "왼쪽에 있습니다.",
        "vietnamese": "Ở bên trái.",
        "romanization": ""
    },
    {
        "id": 88,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "환전소가 어디입니까?",
        "vietnamese": "Quầy đổi tiền ở đâu?",
        "romanization": ""
    },
    {
        "id": 89,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "오른쪽에 있습니다.",
        "vietnamese": "Ở bên phải.",
        "romanization": ""
    },
    {
        "id": 90,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "출구는 어디입니까?",
        "vietnamese": "Lối ra ở đâu?",
        "romanization": ""
    },
    {
        "id": 91,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "저기입니다.",
        "vietnamese": "Ở đằng kia.",
        "romanization": ""
    },
    {
        "id": 92,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "택시는 어디에서 탑니까?",
        "vietnamese": "Bắt taxi ở đâu?",
        "romanization": ""
    },
    {
        "id": 93,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "버스 정류장은 어디입니까?",
        "vietnamese": "Trạm xe buýt ở đâu?",
        "romanization": ""
    },
    {
        "id": 94,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "지하철역이 어디입니까?",
        "vietnamese": "Ga tàu điện ngầm ở đâu?",
        "romanization": ""
    },
    {
        "id": 95,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "도와주셔서 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giúp đỡ.",
        "romanization": ""
    },
    {
        "id": 96,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc bạn một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 97,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "안녕히 가세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 98,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "안녕히 계세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 99,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "다시 오겠습니다.",
        "vietnamese": "Tôi sẽ quay lại.",
        "romanization": ""
    },
    {
        "id": 100,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "한국 여행이 기대됩니다.",
        "vietnamese": "Tôi rất mong chờ chuyến du lịch Hàn Quốc.",
        "romanization": ""
    },
    {
        "id": 101,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "수하물 찾는 곳이 어디입니까?",
        "vietnamese": "Nơi nhận hành lý ở đâu?",
        "romanization": ""
    },
    {
        "id": 102,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "수하물 찾는 곳은 저쪽입니다.",
        "vietnamese": "Nơi nhận hành lý ở phía kia.",
        "romanization": ""
    },
    {
        "id": 103,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐 찾는 곳은 어디예요?",
        "vietnamese": "Khu lấy hành lý ở đâu?",
        "romanization": ""
    },
    {
        "id": 104,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "안내 표지판을 따라가세요.",
        "vietnamese": "Hãy đi theo biển chỉ dẫn.",
        "romanization": ""
    },
    {
        "id": 105,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "몇 번 수하물 벨트입니까?",
        "vietnamese": "Là băng chuyền hành lý số mấy?",
        "romanization": ""
    },
    {
        "id": 106,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "3번 벨트입니다.",
        "vietnamese": "Là băng chuyền số 3.",
        "romanization": ""
    },
    {
        "id": 107,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "제 짐이 아직 안 나왔어요.",
        "vietnamese": "Hành lý của tôi vẫn chưa ra.",
        "romanization": ""
    },
    {
        "id": 108,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "조금만 기다려 주세요.",
        "vietnamese": "Vui lòng chờ một chút.",
        "romanization": ""
    },
    {
        "id": 109,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐이 곧 나올 겁니다.",
        "vietnamese": "Hành lý sẽ ra sớm thôi.",
        "romanization": ""
    },
    {
        "id": 110,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "이 가방이 제 가방입니다.",
        "vietnamese": "Chiếc túi này là của tôi.",
        "romanization": ""
    },
    {
        "id": 111,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "가방에 이름표가 있습니까?",
        "vietnamese": "Trên túi có thẻ tên không?",
        "romanization": ""
    },
    {
        "id": 112,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 113,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "제 가방을 찾고 있어요.",
        "vietnamese": "Tôi đang tìm hành lý của mình.",
        "romanization": ""
    },
    {
        "id": 114,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "어떤 가방입니까?",
        "vietnamese": "Đó là túi như thế nào?",
        "romanization": ""
    },
    {
        "id": 115,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "검은색 큰 가방입니다.",
        "vietnamese": "Đó là vali lớn màu đen.",
        "romanization": ""
    },
    {
        "id": 116,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "이 가방이 맞습니까?",
        "vietnamese": "Có phải túi này không?",
        "romanization": ""
    },
    {
        "id": 117,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "네, 맞습니다.",
        "vietnamese": "Vâng, đúng rồi.",
        "romanization": ""
    },
    {
        "id": 118,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "아니요, 제 것이 아닙니다.",
        "vietnamese": "Không, không phải của tôi.",
        "romanization": ""
    },
    {
        "id": 119,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐을 직접 찾으세요.",
        "vietnamese": "Hãy tự lấy hành lý.",
        "romanization": ""
    },
    {
        "id": 120,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐을 찾았습니다.",
        "vietnamese": "Tôi đã tìm thấy hành lý.",
        "romanization": ""
    },
    {
        "id": 121,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐이 너무 무겁습니다.",
        "vietnamese": "Hành lý rất nặng.",
        "romanization": ""
    },
    {
        "id": 122,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "카트를 사용할 수 있습니까?",
        "vietnamese": "Tôi có thể dùng xe đẩy không?",
        "romanization": ""
    },
    {
        "id": 123,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "네, 저기 있습니다.",
        "vietnamese": "Vâng, ở đằng kia.",
        "romanization": ""
    },
    {
        "id": 124,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "카트를 하나 가져가세요.",
        "vietnamese": "Hãy lấy một xe đẩy.",
        "romanization": ""
    },
    {
        "id": 125,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "카트 사용은 무료입니다.",
        "vietnamese": "Xe đẩy được sử dụng miễn phí.",
        "romanization": ""
    },
    {
        "id": 126,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐이 아직 안 나왔습니다.",
        "vietnamese": "Hành lý vẫn chưa ra.",
        "romanization": ""
    },
    {
        "id": 127,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "조금 더 기다려 주세요.",
        "vietnamese": "Vui lòng chờ thêm một chút.",
        "romanization": ""
    },
    {
        "id": 128,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "비행기 편명이 무엇입니까?",
        "vietnamese": "Số hiệu chuyến bay là gì?",
        "romanization": ""
    },
    {
        "id": 129,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "KE123편입니다.",
        "vietnamese": "Chuyến bay KE123.",
        "romanization": ""
    },
    {
        "id": 130,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "수하물이 곧 도착합니다.",
        "vietnamese": "Hành lý sắp tới.",
        "romanization": ""
    },
    {
        "id": 131,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "이 벨트에서 짐을 찾으세요.",
        "vietnamese": "Hãy lấy hành lý ở băng chuyền này.",
        "romanization": ""
    },
    {
        "id": 132,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "가방을 확인해 주세요.",
        "vietnamese": "Hãy kiểm tra vali.",
        "romanization": ""
    },
    {
        "id": 133,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "제 짐이 보이지 않습니다.",
        "vietnamese": "Tôi không thấy hành lý của mình.",
        "romanization": ""
    },
    {
        "id": 134,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "분실 신고를 하셔야 합니다.",
        "vietnamese": "Bạn cần báo mất hành lý.",
        "romanization": ""
    },
    {
        "id": 135,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "분실 신고는 어디에서 합니까?",
        "vietnamese": "Tôi báo mất ở đâu?",
        "romanization": ""
    },
    {
        "id": 136,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "저기 안내 데스크에서 하세요.",
        "vietnamese": "Hãy làm ở quầy thông tin kia.",
        "romanization": ""
    },
    {
        "id": 137,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐이 사라졌습니다.",
        "vietnamese": "Hành lý của tôi bị mất.",
        "romanization": ""
    },
    {
        "id": 138,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐이 잘못 나온 것 같습니다.",
        "vietnamese": "Có vẻ hành lý bị nhầm.",
        "romanization": ""
    },
    {
        "id": 139,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "이 가방은 제 것이 아닙니다.",
        "vietnamese": "Chiếc vali này không phải của tôi.",
        "romanization": ""
    },
    {
        "id": 140,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "직원이 도와드리겠습니다.",
        "vietnamese": "Nhân viên sẽ giúp bạn.",
        "romanization": ""
    },
    {
        "id": 141,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "수하물 태그가 있습니까?",
        "vietnamese": "Bạn có thẻ hành lý không?",
        "romanization": ""
    },
    {
        "id": 142,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "네, 여기 있습니다.",
        "vietnamese": "Vâng, đây ạ.",
        "romanization": ""
    },
    {
        "id": 143,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "태그 번호를 확인하겠습니다.",
        "vietnamese": "Tôi sẽ kiểm tra số thẻ.",
        "romanization": ""
    },
    {
        "id": 144,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "잠시만 기다려 주세요.",
        "vietnamese": "Vui lòng chờ một chút.",
        "romanization": ""
    },
    {
        "id": 145,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "시스템을 확인하겠습니다.",
        "vietnamese": "Tôi sẽ kiểm tra hệ thống.",
        "romanization": ""
    },
    {
        "id": 146,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐이 아직 공항에 도착하지 않았습니다.",
        "vietnamese": "Hành lý vẫn chưa tới sân bay.",
        "romanization": ""
    },
    {
        "id": 147,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "다음 비행기로 올 수도 있습니다.",
        "vietnamese": "Có thể đến bằng chuyến bay sau.",
        "romanization": ""
    },
    {
        "id": 148,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "호텔 주소를 알려 주세요.",
        "vietnamese": "Vui lòng cho biết địa chỉ khách sạn.",
        "romanization": ""
    },
    {
        "id": 149,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐을 호텔로 보내 드리겠습니다.",
        "vietnamese": "Chúng tôi sẽ gửi hành lý đến khách sạn.",
        "romanization": ""
    },
    {
        "id": 150,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "연락처를 남겨 주세요.",
        "vietnamese": "Vui lòng để lại số liên lạc.",
        "romanization": ""
    },
    {
        "id": 151,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "언제 받을 수 있습니까?",
        "vietnamese": "Khi nào tôi có thể nhận được?",
        "romanization": ""
    },
    {
        "id": 152,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "오늘 안에 받을 수 있습니다.",
        "vietnamese": "Bạn có thể nhận trong hôm nay.",
        "romanization": ""
    },
    {
        "id": 153,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "내일 받을 수도 있습니다.",
        "vietnamese": "Có thể nhận vào ngày mai.",
        "romanization": ""
    },
    {
        "id": 154,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "죄송합니다.",
        "vietnamese": "Chúng tôi xin lỗi.",
        "romanization": ""
    },
    {
        "id": 155,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "불편을 드려 죄송합니다.",
        "vietnamese": "Xin lỗi vì sự bất tiện này.",
        "romanization": ""
    },
    {
        "id": 156,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "문제를 해결해 드리겠습니다.",
        "vietnamese": "Chúng tôi sẽ giải quyết vấn đề.",
        "romanization": ""
    },
    {
        "id": 157,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐을 다시 확인해 주세요.",
        "vietnamese": "Hãy kiểm tra lại hành lý.",
        "romanization": ""
    },
    {
        "id": 158,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "벨트가 멈췄습니다.",
        "vietnamese": "Băng chuyền đã dừng.",
        "romanization": ""
    },
    {
        "id": 159,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "다음 벨트로 이동하세요.",
        "vietnamese": "Hãy chuyển sang băng chuyền khác.",
        "romanization": ""
    },
    {
        "id": 160,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐이 거의 다 나왔습니다.",
        "vietnamese": "Hành lý gần ra hết rồi.",
        "romanization": ""
    },
    {
        "id": 161,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "마지막 가방입니다.",
        "vietnamese": "Đây là vali cuối cùng.",
        "romanization": ""
    },
    {
        "id": 162,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐을 다 찾으셨습니까?",
        "vietnamese": "Bạn đã lấy đủ hành lý chưa?",
        "romanization": ""
    },
    {
        "id": 163,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "네, 다 찾았습니다.",
        "vietnamese": "Vâng, tôi đã lấy đủ.",
        "romanization": ""
    },
    {
        "id": 164,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐이 하나 부족합니다.",
        "vietnamese": "Tôi thiếu một kiện hành lý.",
        "romanization": ""
    },
    {
        "id": 165,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "몇 개의 짐이 있습니까?",
        "vietnamese": "Bạn có mấy kiện hành lý?",
        "romanization": ""
    },
    {
        "id": 166,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "세 개 있습니다.",
        "vietnamese": "Tôi có ba kiện.",
        "romanization": ""
    },
    {
        "id": 167,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "지금 두 개만 찾았습니다.",
        "vietnamese": "Tôi mới lấy được hai kiện.",
        "romanization": ""
    },
    {
        "id": 168,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "하나가 아직 안 나왔습니다.",
        "vietnamese": "Một kiện vẫn chưa ra.",
        "romanization": ""
    },
    {
        "id": 169,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "조금 더 기다려 보세요.",
        "vietnamese": "Hãy chờ thêm một chút.",
        "romanization": ""
    },
    {
        "id": 170,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "곧 나올 것입니다.",
        "vietnamese": "Sẽ ra ngay thôi.",
        "romanization": ""
    },
    {
        "id": 171,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐이 파손되었습니다.",
        "vietnamese": "Hành lý bị hỏng.",
        "romanization": ""
    },
    {
        "id": 172,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "가방이 깨졌습니다.",
        "vietnamese": "Vali bị vỡ.",
        "romanization": ""
    },
    {
        "id": 173,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "이 문제를 신고하고 싶습니다.",
        "vietnamese": "Tôi muốn báo vấn đề này.",
        "romanization": ""
    },
    {
        "id": 174,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "파손 신고서를 작성하세요.",
        "vietnamese": "Hãy điền đơn báo hỏng.",
        "romanization": ""
    },
    {
        "id": 175,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "사진을 찍겠습니다.",
        "vietnamese": "Tôi sẽ chụp ảnh.",
        "romanization": ""
    },
    {
        "id": 176,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "보상 절차를 안내해 드리겠습니다.",
        "vietnamese": "Chúng tôi sẽ hướng dẫn thủ tục bồi thường.",
        "romanization": ""
    },
    {
        "id": 177,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐을 확인해 주세요.",
        "vietnamese": "Hãy kiểm tra hành lý.",
        "romanization": ""
    },
    {
        "id": 178,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "문제가 없습니다.",
        "vietnamese": "Không có vấn đề gì.",
        "romanization": ""
    },
    {
        "id": 179,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "모든 짐을 찾았습니다.",
        "vietnamese": "Tôi đã lấy hết hành lý.",
        "romanization": ""
    },
    {
        "id": 180,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "이제 공항을 나가겠습니다.",
        "vietnamese": "Bây giờ tôi sẽ rời sân bay.",
        "romanization": ""
    },
    {
        "id": 181,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "출구가 어디입니까?",
        "vietnamese": "Lối ra ở đâu?",
        "romanization": ""
    },
    {
        "id": 182,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "저쪽입니다.",
        "vietnamese": "Ở phía kia.",
        "romanization": ""
    },
    {
        "id": 183,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "세관 검사가 있습니다.",
        "vietnamese": "Có kiểm tra hải quan.",
        "romanization": ""
    },
    {
        "id": 184,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "세관으로 가세요.",
        "vietnamese": "Hãy đi đến hải quan.",
        "romanization": ""
    },
    {
        "id": 185,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "신고할 물건이 있습니까?",
        "vietnamese": "Bạn có đồ cần khai báo không?",
        "romanization": ""
    },
    {
        "id": 186,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "없습니다.",
        "vietnamese": "Không có.",
        "romanization": ""
    },
    {
        "id": 187,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "짐 검사를 하겠습니다.",
        "vietnamese": "Chúng tôi sẽ kiểm tra hành lý.",
        "romanization": ""
    },
    {
        "id": 188,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "가방을 열어 주세요.",
        "vietnamese": "Vui lòng mở vali.",
        "romanization": ""
    },
    {
        "id": 189,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "검사가 끝났습니다.",
        "vietnamese": "Kiểm tra xong rồi.",
        "romanization": ""
    },
    {
        "id": 190,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "통과하셔도 됩니다.",
        "vietnamese": "Bạn có thể đi qua.",
        "romanization": ""
    },
    {
        "id": 191,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "도와주셔서 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giúp đỡ.",
        "romanization": ""
    },
    {
        "id": 192,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc bạn một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 193,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "좋은 여행 되세요.",
        "vietnamese": "Chúc chuyến đi vui vẻ.",
        "romanization": ""
    },
    {
        "id": 194,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "환영합니다.",
        "vietnamese": "Chào mừng bạn.",
        "romanization": ""
    },
    {
        "id": 195,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "문제가 생기면 문의하세요.",
        "vietnamese": "Nếu có vấn đề hãy hỏi.",
        "romanization": ""
    },
    {
        "id": 196,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "안내 데스크에 가세요.",
        "vietnamese": "Hãy đến quầy thông tin.",
        "romanization": ""
    },
    {
        "id": 197,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "직원이 도와줄 것입니다.",
        "vietnamese": "Nhân viên sẽ giúp bạn.",
        "romanization": ""
    },
    {
        "id": 198,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "이쪽으로 가세요.",
        "vietnamese": "Hãy đi lối này.",
        "romanization": ""
    },
    {
        "id": 199,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "출구가 바로 앞입니다.",
        "vietnamese": "Lối ra ở ngay phía trước.",
        "romanization": ""
    },
    {
        "id": 200,
        "topic": "tinh-huong-1",
        "level": "a1",
        "korean": "즐거운 여행 되세요.",
        "vietnamese": "Chúc bạn có chuyến du lịch vui vẻ.",
        "romanization": ""
    },
    {
        "id": 201,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "환전소가 어디입니까?",
        "vietnamese": "Quầy đổi tiền ở đâu?",
        "romanization": ""
    },
    {
        "id": 202,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "저쪽에 있습니다.",
        "vietnamese": "Ở phía kia.",
        "romanization": ""
    },
    {
        "id": 203,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "환전을 하고 싶습니다.",
        "vietnamese": "Tôi muốn đổi tiền.",
        "romanization": ""
    },
    {
        "id": 204,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "어떤 돈을 환전하시겠습니까?",
        "vietnamese": "Bạn muốn đổi loại tiền nào?",
        "romanization": ""
    },
    {
        "id": 205,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "베트남 돈을 원화로 바꾸고 싶습니다.",
        "vietnamese": "Tôi muốn đổi tiền Việt sang won.",
        "romanization": ""
    },
    {
        "id": 206,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "얼마를 환전하시겠습니까?",
        "vietnamese": "Bạn muốn đổi bao nhiêu tiền?",
        "romanization": ""
    },
    {
        "id": 207,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "100달러를 환전하고 싶습니다.",
        "vietnamese": "Tôi muốn đổi 100 đô la.",
        "romanization": ""
    },
    {
        "id": 208,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "여권을 보여 주세요.",
        "vietnamese": "Vui lòng cho xem hộ chiếu.",
        "romanization": ""
    },
    {
        "id": 209,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "여기 있습니다.",
        "vietnamese": "Đây ạ.",
        "romanization": ""
    },
    {
        "id": 210,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "환율은 얼마입니까?",
        "vietnamese": "Tỷ giá là bao nhiêu?",
        "romanization": ""
    },
    {
        "id": 211,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "오늘 환율은 이렇습니다.",
        "vietnamese": "Tỷ giá hôm nay là như thế này.",
        "romanization": ""
    },
    {
        "id": 212,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "수수료가 있습니까?",
        "vietnamese": "Có phí không?",
        "romanization": ""
    },
    {
        "id": 213,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "네, 수수료가 있습니다.",
        "vietnamese": "Vâng, có phí.",
        "romanization": ""
    },
    {
        "id": 214,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "수수료는 얼마입니까?",
        "vietnamese": "Phí là bao nhiêu?",
        "romanization": ""
    },
    {
        "id": 215,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "5%입니다.",
        "vietnamese": "Là 5%.",
        "romanization": ""
    },
    {
        "id": 216,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "괜찮습니다.",
        "vietnamese": "Không sao.",
        "romanization": ""
    },
    {
        "id": 217,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "환전을 진행하겠습니다.",
        "vietnamese": "Chúng tôi sẽ tiến hành đổi tiền.",
        "romanization": ""
    },
    {
        "id": 218,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "잠시만 기다려 주세요.",
        "vietnamese": "Vui lòng chờ một chút.",
        "romanization": ""
    },
    {
        "id": 219,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "여기 있습니다.",
        "vietnamese": "Đây là tiền của bạn.",
        "romanization": ""
    },
    {
        "id": 220,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "확인해 주세요.",
        "vietnamese": "Vui lòng kiểm tra.",
        "romanization": ""
    },
    {
        "id": 221,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 222,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "영수증을 드리겠습니다.",
        "vietnamese": "Chúng tôi sẽ đưa biên lai.",
        "romanization": ""
    },
    {
        "id": 223,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "영수증을 주세요.",
        "vietnamese": "Cho tôi biên lai.",
        "romanization": ""
    },
    {
        "id": 224,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "현금으로 드리겠습니다.",
        "vietnamese": "Chúng tôi sẽ đưa tiền mặt.",
        "romanization": ""
    },
    {
        "id": 225,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "카드로 결제할 수 있습니까?",
        "vietnamese": "Có thể thanh toán bằng thẻ không?",
        "romanization": ""
    },
    {
        "id": 226,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, có thể.",
        "romanization": ""
    },
    {
        "id": 227,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "환전이 끝났습니다.",
        "vietnamese": "Việc đổi tiền đã xong.",
        "romanization": ""
    },
    {
        "id": 228,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "도와주셔서 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giúp.",
        "romanization": ""
    },
    {
        "id": 229,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "다른 도움이 필요하십니까?",
        "vietnamese": "Bạn có cần giúp gì khác không?",
        "romanization": ""
    },
    {
        "id": 230,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "유심을 사고 싶습니다.",
        "vietnamese": "Tôi muốn mua SIM.",
        "romanization": ""
    },
    {
        "id": 231,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "유심 판매점이 어디입니까?",
        "vietnamese": "Cửa hàng bán SIM ở đâu?",
        "romanization": ""
    },
    {
        "id": 232,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "저쪽에 있습니다.",
        "vietnamese": "Ở phía kia.",
        "romanization": ""
    },
    {
        "id": 233,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "유심을 하나 사고 싶습니다.",
        "vietnamese": "Tôi muốn mua một SIM.",
        "romanization": ""
    },
    {
        "id": 234,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "며칠 동안 사용하십니까?",
        "vietnamese": "Bạn sử dụng trong bao nhiêu ngày?",
        "romanization": ""
    },
    {
        "id": 235,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "일주일 동안 사용할 예정입니다.",
        "vietnamese": "Tôi sẽ dùng trong một tuần.",
        "romanization": ""
    },
    {
        "id": 236,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "여행용 유심이 있습니다.",
        "vietnamese": "Có SIM du lịch.",
        "romanization": ""
    },
    {
        "id": 237,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "가격이 얼마입니까?",
        "vietnamese": "Giá bao nhiêu?",
        "romanization": ""
    },
    {
        "id": 238,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "20달러입니다.",
        "vietnamese": "Là 20 đô la.",
        "romanization": ""
    },
    {
        "id": 239,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "데이터가 포함되어 있습니까?",
        "vietnamese": "Có bao gồm dữ liệu không?",
        "romanization": ""
    },
    {
        "id": 240,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "네, 데이터가 포함되어 있습니다.",
        "vietnamese": "Vâng, có dữ liệu.",
        "romanization": ""
    },
    {
        "id": 241,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "몇 기가입니까?",
        "vietnamese": "Bao nhiêu GB?",
        "romanization": ""
    },
    {
        "id": 242,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "10기가입니다.",
        "vietnamese": "10 GB.",
        "romanization": ""
    },
    {
        "id": 243,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "통화도 가능합니까?",
        "vietnamese": "Có thể gọi điện không?",
        "romanization": ""
    },
    {
        "id": 244,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, có thể.",
        "romanization": ""
    },
    {
        "id": 245,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "유심을 설치해 주세요.",
        "vietnamese": "Vui lòng lắp SIM giúp tôi.",
        "romanization": ""
    },
    {
        "id": 246,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "휴대폰을 보여 주세요.",
        "vietnamese": "Vui lòng cho xem điện thoại.",
        "romanization": ""
    },
    {
        "id": 247,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "여기 있습니다.",
        "vietnamese": "Đây ạ.",
        "romanization": ""
    },
    {
        "id": 248,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "잠시만 기다려 주세요.",
        "vietnamese": "Vui lòng chờ một chút.",
        "romanization": ""
    },
    {
        "id": 249,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "유심을 설치하겠습니다.",
        "vietnamese": "Tôi sẽ lắp SIM.",
        "romanization": ""
    },
    {
        "id": 250,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "설치가 끝났습니다.",
        "vietnamese": "Đã lắp xong.",
        "romanization": ""
    },
    {
        "id": 251,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "인터넷이 잘 됩니다.",
        "vietnamese": "Internet hoạt động tốt.",
        "romanization": ""
    },
    {
        "id": 252,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "테스트해 보세요.",
        "vietnamese": "Hãy thử kiểm tra.",
        "romanization": ""
    },
    {
        "id": 253,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "잘 됩니다.",
        "vietnamese": "Hoạt động tốt.",
        "romanization": ""
    },
    {
        "id": 254,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "문제가 있으면 다시 오세요.",
        "vietnamese": "Nếu có vấn đề hãy quay lại.",
        "romanization": ""
    },
    {
        "id": 255,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "와이파이도 사용할 수 있습니까?",
        "vietnamese": "Có thể dùng Wi-Fi không?",
        "romanization": ""
    },
    {
        "id": 256,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "네, 사용할 수 있습니다.",
        "vietnamese": "Vâng, có thể.",
        "romanization": ""
    },
    {
        "id": 257,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "와이파이 비밀번호는 무엇입니까?",
        "vietnamese": "Mật khẩu Wi-Fi là gì?",
        "romanization": ""
    },
    {
        "id": 258,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "여기 적혀 있습니다.",
        "vietnamese": "Được viết ở đây.",
        "romanization": ""
    },
    {
        "id": 259,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 260,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc bạn một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 261,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "충전도 할 수 있습니까?",
        "vietnamese": "Có thể nạp tiền không?",
        "romanization": ""
    },
    {
        "id": 262,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, có thể.",
        "romanization": ""
    },
    {
        "id": 263,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "얼마를 충전하시겠습니까?",
        "vietnamese": "Bạn muốn nạp bao nhiêu?",
        "romanization": ""
    },
    {
        "id": 264,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "10달러 충전해 주세요.",
        "vietnamese": "Hãy nạp 10 đô la.",
        "romanization": ""
    },
    {
        "id": 265,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "충전이 완료되었습니다.",
        "vietnamese": "Đã nạp xong.",
        "romanization": ""
    },
    {
        "id": 266,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "데이터를 더 살 수 있습니까?",
        "vietnamese": "Có thể mua thêm dữ liệu không?",
        "romanization": ""
    },
    {
        "id": 267,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, có thể.",
        "romanization": ""
    },
    {
        "id": 268,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "추가 데이터 가격은 얼마입니까?",
        "vietnamese": "Giá dữ liệu thêm là bao nhiêu?",
        "romanization": ""
    },
    {
        "id": 269,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "5달러입니다.",
        "vietnamese": "Là 5 đô la.",
        "romanization": ""
    },
    {
        "id": 270,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "구매하겠습니다.",
        "vietnamese": "Tôi sẽ mua.",
        "romanization": ""
    },
    {
        "id": 271,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "결제는 어떻게 하시겠습니까?",
        "vietnamese": "Bạn muốn thanh toán thế nào?",
        "romanization": ""
    },
    {
        "id": 272,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "현금으로 하겠습니다.",
        "vietnamese": "Tôi sẽ trả tiền mặt.",
        "romanization": ""
    },
    {
        "id": 273,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "카드로 하겠습니다.",
        "vietnamese": "Tôi sẽ trả bằng thẻ.",
        "romanization": ""
    },
    {
        "id": 274,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "영수증을 드리겠습니다.",
        "vietnamese": "Chúng tôi sẽ đưa biên lai.",
        "romanization": ""
    },
    {
        "id": 275,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 276,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "다른 도움이 필요하십니까?",
        "vietnamese": "Bạn cần giúp gì khác không?",
        "romanization": ""
    },
    {
        "id": 277,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "없습니다.",
        "vietnamese": "Không.",
        "romanization": ""
    },
    {
        "id": 278,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "친절하게 도와주셔서 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giúp đỡ nhiệt tình.",
        "romanization": ""
    },
    {
        "id": 279,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "즐거운 여행 되세요.",
        "vietnamese": "Chúc chuyến du lịch vui vẻ.",
        "romanization": ""
    },
    {
        "id": 280,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 281,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "공항 와이파이를 사용할 수 있습니까?",
        "vietnamese": "Có thể dùng Wi-Fi sân bay không?",
        "romanization": ""
    },
    {
        "id": 282,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "네, 무료입니다.",
        "vietnamese": "Vâng, miễn phí.",
        "romanization": ""
    },
    {
        "id": 283,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "어디에서 연결합니까?",
        "vietnamese": "Kết nối ở đâu?",
        "romanization": ""
    },
    {
        "id": 284,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "설정에서 연결하세요.",
        "vietnamese": "Hãy kết nối trong phần cài đặt.",
        "romanization": ""
    },
    {
        "id": 285,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "신호가 약합니다.",
        "vietnamese": "Tín hiệu yếu.",
        "romanization": ""
    },
    {
        "id": 286,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "여기서는 잘 됩니다.",
        "vietnamese": "Ở đây thì tốt.",
        "romanization": ""
    },
    {
        "id": 287,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "인터넷 속도가 빠릅니다.",
        "vietnamese": "Tốc độ internet nhanh.",
        "romanization": ""
    },
    {
        "id": 288,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "지도를 사용할 수 있습니다.",
        "vietnamese": "Có thể dùng bản đồ.",
        "romanization": ""
    },
    {
        "id": 289,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "메시지를 보낼 수 있습니다.",
        "vietnamese": "Có thể gửi tin nhắn.",
        "romanization": ""
    },
    {
        "id": 290,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "전화도 가능합니다.",
        "vietnamese": "Cũng có thể gọi điện.",
        "romanization": ""
    },
    {
        "id": 291,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "정말 편리합니다.",
        "vietnamese": "Rất tiện lợi.",
        "romanization": ""
    },
    {
        "id": 292,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "여행에 도움이 됩니다.",
        "vietnamese": "Rất hữu ích cho chuyến du lịch.",
        "romanization": ""
    },
    {
        "id": 293,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "문제가 생기면 문의하세요.",
        "vietnamese": "Nếu có vấn đề hãy hỏi.",
        "romanization": ""
    },
    {
        "id": 294,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "직원이 도와드리겠습니다.",
        "vietnamese": "Nhân viên sẽ giúp bạn.",
        "romanization": ""
    },
    {
        "id": 295,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "안내 데스크가 어디입니까?",
        "vietnamese": "Quầy thông tin ở đâu?",
        "romanization": ""
    },
    {
        "id": 296,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "저 앞에 있습니다.",
        "vietnamese": "Ở phía trước.",
        "romanization": ""
    },
    {
        "id": 297,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "도와주셔서 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giúp đỡ.",
        "romanization": ""
    },
    {
        "id": 298,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "안녕히 가세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 299,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "좋은 여행 되세요.",
        "vietnamese": "Chúc chuyến đi tốt đẹp.",
        "romanization": ""
    },
    {
        "id": 300,
        "topic": "tinh-huong-3",
        "level": "a1",
        "korean": "한국 여행을 즐기세요.",
        "vietnamese": "Hãy tận hưởng chuyến du lịch Hàn Quốc.",
        "romanization": ""
    },
    {
        "id": 301,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "택시는 어디에서 탑니까?",
        "vietnamese": "Bắt taxi ở đâu?",
        "romanization": ""
    },
    {
        "id": 302,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "택시 정류장이 어디입니까?",
        "vietnamese": "Trạm taxi ở đâu?",
        "romanization": ""
    },
    {
        "id": 303,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "저쪽에 있습니다.",
        "vietnamese": "Ở phía kia.",
        "romanization": ""
    },
    {
        "id": 304,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "공항 택시를 타고 싶습니다.",
        "vietnamese": "Tôi muốn đi taxi sân bay.",
        "romanization": ""
    },
    {
        "id": 305,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "택시가 많습니까?",
        "vietnamese": "Có nhiều taxi không?",
        "romanization": ""
    },
    {
        "id": 306,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "네, 많습니다.",
        "vietnamese": "Vâng, nhiều.",
        "romanization": ""
    },
    {
        "id": 307,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "지금 택시를 탈 수 있습니까?",
        "vietnamese": "Bây giờ tôi có thể bắt taxi không?",
        "romanization": ""
    },
    {
        "id": 308,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, có thể.",
        "romanization": ""
    },
    {
        "id": 309,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "택시를 불러 주세요.",
        "vietnamese": "Vui lòng gọi taxi giúp tôi.",
        "romanization": ""
    },
    {
        "id": 310,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "네, 알겠습니다.",
        "vietnamese": "Vâng, tôi hiểu rồi.",
        "romanization": ""
    },
    {
        "id": 311,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "어디로 가십니까?",
        "vietnamese": "Bạn đi đâu?",
        "romanization": ""
    },
    {
        "id": 312,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "호텔로 가 주세요.",
        "vietnamese": "Làm ơn đưa tôi đến khách sạn.",
        "romanization": ""
    },
    {
        "id": 313,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "이 주소로 가 주세요.",
        "vietnamese": "Hãy đến địa chỉ này.",
        "romanization": ""
    },
    {
        "id": 314,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "지도를 보여 드리겠습니다.",
        "vietnamese": "Tôi sẽ cho bạn xem bản đồ.",
        "romanization": ""
    },
    {
        "id": 315,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "여기입니다.",
        "vietnamese": "Ở đây.",
        "romanization": ""
    },
    {
        "id": 316,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "얼마나 걸립니까?",
        "vietnamese": "Mất bao lâu?",
        "romanization": ""
    },
    {
        "id": 317,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "약 30분 걸립니다.",
        "vietnamese": "Khoảng 30 phút.",
        "romanization": ""
    },
    {
        "id": 318,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "요금이 얼마입니까?",
        "vietnamese": "Giá bao nhiêu?",
        "romanization": ""
    },
    {
        "id": 319,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "약 20달러입니다.",
        "vietnamese": "Khoảng 20 đô la.",
        "romanization": ""
    },
    {
        "id": 320,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "괜찮습니다.",
        "vietnamese": "Được thôi.",
        "romanization": ""
    },
    {
        "id": 321,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "지금 출발해 주세요.",
        "vietnamese": "Hãy khởi hành ngay bây giờ.",
        "romanization": ""
    },
    {
        "id": 322,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "짐을 트렁크에 넣어 주세요.",
        "vietnamese": "Hãy để hành lý vào cốp xe.",
        "romanization": ""
    },
    {
        "id": 323,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "네, 알겠습니다.",
        "vietnamese": "Vâng, tôi hiểu rồi.",
        "romanization": ""
    },
    {
        "id": 324,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "짐이 많습니다.",
        "vietnamese": "Tôi có nhiều hành lý.",
        "romanization": ""
    },
    {
        "id": 325,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "문을 닫아 주세요.",
        "vietnamese": "Hãy đóng cửa.",
        "romanization": ""
    },
    {
        "id": 326,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "에어컨을 켜 주세요.",
        "vietnamese": "Hãy bật điều hòa.",
        "romanization": ""
    },
    {
        "id": 327,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "조금 춥습니다.",
        "vietnamese": "Hơi lạnh.",
        "romanization": ""
    },
    {
        "id": 328,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "에어컨을 꺼 주세요.",
        "vietnamese": "Hãy tắt điều hòa.",
        "romanization": ""
    },
    {
        "id": 329,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "음악을 줄여 주세요.",
        "vietnamese": "Hãy giảm nhạc.",
        "romanization": ""
    },
    {
        "id": 330,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "조용히 가 주세요.",
        "vietnamese": "Hãy đi yên tĩnh.",
        "romanization": ""
    },
    {
        "id": 331,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "이 길이 맞습니까?",
        "vietnamese": "Đường này đúng không?",
        "romanization": ""
    },
    {
        "id": 332,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "네, 맞습니다.",
        "vietnamese": "Vâng, đúng.",
        "romanization": ""
    },
    {
        "id": 333,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "길이 막힙니다.",
        "vietnamese": "Đường bị tắc.",
        "romanization": ""
    },
    {
        "id": 334,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "다른 길로 가겠습니다.",
        "vietnamese": "Tôi sẽ đi đường khác.",
        "romanization": ""
    },
    {
        "id": 335,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "더 빠른 길이 있습니까?",
        "vietnamese": "Có đường nhanh hơn không?",
        "romanization": ""
    },
    {
        "id": 336,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 337,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "지도 앱을 사용합니다.",
        "vietnamese": "Tôi dùng ứng dụng bản đồ.",
        "romanization": ""
    },
    {
        "id": 338,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "괜찮습니다.",
        "vietnamese": "Không sao.",
        "romanization": ""
    },
    {
        "id": 339,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "여기에서 내려 주세요.",
        "vietnamese": "Hãy dừng ở đây.",
        "romanization": ""
    },
    {
        "id": 340,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "조금 더 가 주세요.",
        "vietnamese": "Đi thêm một chút nữa.",
        "romanization": ""
    },
    {
        "id": 341,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "왼쪽으로 가 주세요.",
        "vietnamese": "Rẽ trái.",
        "romanization": ""
    },
    {
        "id": 342,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "오른쪽으로 가 주세요.",
        "vietnamese": "Rẽ phải.",
        "romanization": ""
    },
    {
        "id": 343,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "직진해 주세요.",
        "vietnamese": "Đi thẳng.",
        "romanization": ""
    },
    {
        "id": 344,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "신호등에서 멈춰 주세요.",
        "vietnamese": "Dừng ở đèn giao thông.",
        "romanization": ""
    },
    {
        "id": 345,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "저 건물이 호텔입니다.",
        "vietnamese": "Tòa nhà kia là khách sạn.",
        "romanization": ""
    },
    {
        "id": 346,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "거기에서 내려 주세요.",
        "vietnamese": "Hãy dừng ở đó.",
        "romanization": ""
    },
    {
        "id": 347,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "도착했습니다.",
        "vietnamese": "Chúng ta đã đến nơi.",
        "romanization": ""
    },
    {
        "id": 348,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "요금이 얼마입니까?",
        "vietnamese": "Tiền là bao nhiêu?",
        "romanization": ""
    },
    {
        "id": 349,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "25달러입니다.",
        "vietnamese": "25 đô la.",
        "romanization": ""
    },
    {
        "id": 350,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "카드로 결제할 수 있습니까?",
        "vietnamese": "Có thể thanh toán bằng thẻ không?",
        "romanization": ""
    },
    {
        "id": 351,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 352,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "현금으로 내겠습니다.",
        "vietnamese": "Tôi trả tiền mặt.",
        "romanization": ""
    },
    {
        "id": 353,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "거스름돈을 주세요.",
        "vietnamese": "Cho tôi tiền thừa.",
        "romanization": ""
    },
    {
        "id": 354,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "여기 있습니다.",
        "vietnamese": "Đây ạ.",
        "romanization": ""
    },
    {
        "id": 355,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 356,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "영수증을 주세요.",
        "vietnamese": "Cho tôi biên lai.",
        "romanization": ""
    },
    {
        "id": 357,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "영수증 여기 있습니다.",
        "vietnamese": "Đây là biên lai.",
        "romanization": ""
    },
    {
        "id": 358,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "친절해서 감사합니다.",
        "vietnamese": "Cảm ơn vì bạn rất thân thiện.",
        "romanization": ""
    },
    {
        "id": 359,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc bạn một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 360,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "안녕히 가세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 361,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "길을 묻고 싶습니다.",
        "vietnamese": "Tôi muốn hỏi đường.",
        "romanization": ""
    },
    {
        "id": 362,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "이곳이 어디입니까?",
        "vietnamese": "Đây là đâu?",
        "romanization": ""
    },
    {
        "id": 363,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "이 거리는 무엇입니까?",
        "vietnamese": "Đây là đường gì?",
        "romanization": ""
    },
    {
        "id": 364,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "이 호텔이 어디에 있습니까?",
        "vietnamese": "Khách sạn này ở đâu?",
        "romanization": ""
    },
    {
        "id": 365,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "저 건물입니다.",
        "vietnamese": "Là tòa nhà kia.",
        "romanization": ""
    },
    {
        "id": 366,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "가까운 지하철역이 어디입니까?",
        "vietnamese": "Ga tàu điện gần nhất ở đâu?",
        "romanization": ""
    },
    {
        "id": 367,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "걸어서 5분입니다.",
        "vietnamese": "Đi bộ 5 phút.",
        "romanization": ""
    },
    {
        "id": 368,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "버스 정류장은 어디입니까?",
        "vietnamese": "Trạm xe buýt ở đâu?",
        "romanization": ""
    },
    {
        "id": 369,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "길 건너편에 있습니다.",
        "vietnamese": "Ở bên kia đường.",
        "romanization": ""
    },
    {
        "id": 370,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "도와주셔서 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giúp.",
        "romanization": ""
    },
    {
        "id": 371,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "천만에요.",
        "vietnamese": "Không có gì.",
        "romanization": ""
    },
    {
        "id": 372,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "관광객이십니까?",
        "vietnamese": "Bạn là khách du lịch à?",
        "romanization": ""
    },
    {
        "id": 373,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "네, 관광객입니다.",
        "vietnamese": "Vâng, tôi là khách du lịch.",
        "romanization": ""
    },
    {
        "id": 374,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "한국이 처음이십니까?",
        "vietnamese": "Đây là lần đầu bạn đến Hàn Quốc?",
        "romanization": ""
    },
    {
        "id": 375,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "네, 처음입니다.",
        "vietnamese": "Vâng, lần đầu.",
        "romanization": ""
    },
    {
        "id": 376,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "좋은 여행 되세요.",
        "vietnamese": "Chúc chuyến đi tốt đẹp.",
        "romanization": ""
    },
    {
        "id": 377,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 378,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "사진을 찍어 주시겠습니까?",
        "vietnamese": "Bạn có thể chụp ảnh giúp tôi không?",
        "romanization": ""
    },
    {
        "id": 379,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 380,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "여기에서 찍어 주세요.",
        "vietnamese": "Hãy chụp ở đây.",
        "romanization": ""
    },
    {
        "id": 381,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 382,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "이 근처에 식당이 있습니까?",
        "vietnamese": "Gần đây có nhà hàng không?",
        "romanization": ""
    },
    {
        "id": 383,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 384,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "어디입니까?",
        "vietnamese": "Ở đâu?",
        "romanization": ""
    },
    {
        "id": 385,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "저 골목에 있습니다.",
        "vietnamese": "Ở con hẻm kia.",
        "romanization": ""
    },
    {
        "id": 386,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "유명한 식당입니까?",
        "vietnamese": "Đó là nhà hàng nổi tiếng à?",
        "romanization": ""
    },
    {
        "id": 387,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "네, 맛있습니다.",
        "vietnamese": "Vâng, rất ngon.",
        "romanization": ""
    },
    {
        "id": 388,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "추천해 주셔서 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giới thiệu.",
        "romanization": ""
    },
    {
        "id": 389,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "천만에요.",
        "vietnamese": "Không có gì.",
        "romanization": ""
    },
    {
        "id": 390,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "즐거운 여행 되세요.",
        "vietnamese": "Chúc chuyến du lịch vui vẻ.",
        "romanization": ""
    },
    {
        "id": 391,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "공항까지 얼마나 멉니까?",
        "vietnamese": "Từ đây đến sân bay xa không?",
        "romanization": ""
    },
    {
        "id": 392,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "약 40분 걸립니다.",
        "vietnamese": "Khoảng 40 phút.",
        "romanization": ""
    },
    {
        "id": 393,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "지금 출발하면 괜찮습니까?",
        "vietnamese": "Nếu đi bây giờ có kịp không?",
        "romanization": ""
    },
    {
        "id": 394,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "네, 괜찮습니다.",
        "vietnamese": "Vâng, kịp.",
        "romanization": ""
    },
    {
        "id": 395,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "서둘러 주세요.",
        "vietnamese": "Hãy đi nhanh giúp tôi.",
        "romanization": ""
    },
    {
        "id": 396,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "걱정하지 마세요.",
        "vietnamese": "Đừng lo.",
        "romanization": ""
    },
    {
        "id": 397,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "곧 도착합니다.",
        "vietnamese": "Sắp đến rồi.",
        "romanization": ""
    },
    {
        "id": 398,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "여행 잘 하세요.",
        "vietnamese": "Chúc chuyến đi tốt đẹp.",
        "romanization": ""
    },
    {
        "id": 399,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 400,
        "topic": "tinh-huong-4",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc bạn một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 401,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "안녕하세요.",
        "vietnamese": "Xin chào.",
        "romanization": ""
    },
    {
        "id": 402,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "체크인하고 싶습니다.",
        "vietnamese": "Tôi muốn làm thủ tục nhận phòng.",
        "romanization": ""
    },
    {
        "id": 403,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "예약을 했습니다.",
        "vietnamese": "Tôi đã đặt phòng rồi.",
        "romanization": ""
    },
    {
        "id": 404,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "성함이 어떻게 되십니까?",
        "vietnamese": "Tên của bạn là gì?",
        "romanization": ""
    },
    {
        "id": 405,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "응옥아잉입니다.",
        "vietnamese": "Tôi là Ngọc Ánh.",
        "romanization": ""
    },
    {
        "id": 406,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "여권을 보여 주세요.",
        "vietnamese": "Vui lòng cho xem hộ chiếu.",
        "romanization": ""
    },
    {
        "id": 407,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "여기 있습니다.",
        "vietnamese": "Đây ạ.",
        "romanization": ""
    },
    {
        "id": 408,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "예약을 확인하겠습니다.",
        "vietnamese": "Chúng tôi sẽ kiểm tra đặt phòng.",
        "romanization": ""
    },
    {
        "id": 409,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "잠시만 기다려 주세요.",
        "vietnamese": "Vui lòng chờ một chút.",
        "romanization": ""
    },
    {
        "id": 410,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "예약이 확인되었습니다.",
        "vietnamese": "Đặt phòng đã được xác nhận.",
        "romanization": ""
    },
    {
        "id": 411,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "몇 박 머무르십니까?",
        "vietnamese": "Bạn ở mấy đêm?",
        "romanization": ""
    },
    {
        "id": 412,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "3박입니다.",
        "vietnamese": "Ba đêm.",
        "romanization": ""
    },
    {
        "id": 413,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "싱글룸을 예약했습니다.",
        "vietnamese": "Tôi đặt phòng đơn.",
        "romanization": ""
    },
    {
        "id": 414,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "더블룸을 예약했습니다.",
        "vietnamese": "Tôi đặt phòng đôi.",
        "romanization": ""
    },
    {
        "id": 415,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "방이 준비되었습니다.",
        "vietnamese": "Phòng đã sẵn sàng.",
        "romanization": ""
    },
    {
        "id": 416,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "체크인은 오후 3시부터 가능합니다.",
        "vietnamese": "Nhận phòng từ 3 giờ chiều.",
        "romanization": ""
    },
    {
        "id": 417,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "조금 일찍 체크인할 수 있습니까?",
        "vietnamese": "Tôi có thể check-in sớm không?",
        "romanization": ""
    },
    {
        "id": 418,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "가능한지 확인해 보겠습니다.",
        "vietnamese": "Tôi sẽ kiểm tra xem có thể không.",
        "romanization": ""
    },
    {
        "id": 419,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, có thể.",
        "romanization": ""
    },
    {
        "id": 420,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "추가 요금이 있습니다.",
        "vietnamese": "Có phí phụ thu.",
        "romanization": ""
    },
    {
        "id": 421,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "얼마입니까?",
        "vietnamese": "Bao nhiêu tiền?",
        "romanization": ""
    },
    {
        "id": 422,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "10달러입니다.",
        "vietnamese": "10 đô la.",
        "romanization": ""
    },
    {
        "id": 423,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "괜찮습니다.",
        "vietnamese": "Không sao.",
        "romanization": ""
    },
    {
        "id": 424,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "결제는 어떻게 하시겠습니까?",
        "vietnamese": "Bạn muốn thanh toán thế nào?",
        "romanization": ""
    },
    {
        "id": 425,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "현금으로 하겠습니다.",
        "vietnamese": "Tôi trả tiền mặt.",
        "romanization": ""
    },
    {
        "id": 426,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "카드로 하겠습니다.",
        "vietnamese": "Tôi trả bằng thẻ.",
        "romanization": ""
    },
    {
        "id": 427,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "카드를 주세요.",
        "vietnamese": "Vui lòng đưa thẻ.",
        "romanization": ""
    },
    {
        "id": 428,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "결제가 완료되었습니다.",
        "vietnamese": "Thanh toán đã xong.",
        "romanization": ""
    },
    {
        "id": 429,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "영수증을 드리겠습니다.",
        "vietnamese": "Chúng tôi sẽ đưa biên lai.",
        "romanization": ""
    },
    {
        "id": 430,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 431,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "조식이 포함되어 있습니까?",
        "vietnamese": "Có bao gồm bữa sáng không?",
        "romanization": ""
    },
    {
        "id": 432,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "네, 포함되어 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 433,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "조식은 몇 시입니까?",
        "vietnamese": "Bữa sáng lúc mấy giờ?",
        "romanization": ""
    },
    {
        "id": 434,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "아침 7시부터 10시까지입니다.",
        "vietnamese": "Từ 7h đến 10h sáng.",
        "romanization": ""
    },
    {
        "id": 435,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "식당은 어디에 있습니까?",
        "vietnamese": "Nhà hàng ở đâu?",
        "romanization": ""
    },
    {
        "id": 436,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "1층에 있습니다.",
        "vietnamese": "Ở tầng 1.",
        "romanization": ""
    },
    {
        "id": 437,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "와이파이가 있습니까?",
        "vietnamese": "Có Wi-Fi không?",
        "romanization": ""
    },
    {
        "id": 438,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "네, 무료입니다.",
        "vietnamese": "Vâng, miễn phí.",
        "romanization": ""
    },
    {
        "id": 439,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "비밀번호는 무엇입니까?",
        "vietnamese": "Mật khẩu là gì?",
        "romanization": ""
    },
    {
        "id": 440,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "여기 적혀 있습니다.",
        "vietnamese": "Được ghi ở đây.",
        "romanization": ""
    },
    {
        "id": 441,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "엘리베이터는 어디입니까?",
        "vietnamese": "Thang máy ở đâu?",
        "romanization": ""
    },
    {
        "id": 442,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "저쪽에 있습니다.",
        "vietnamese": "Ở phía kia.",
        "romanization": ""
    },
    {
        "id": 443,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "방 번호는 무엇입니까?",
        "vietnamese": "Số phòng là gì?",
        "romanization": ""
    },
    {
        "id": 444,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "305호입니다.",
        "vietnamese": "Phòng 305.",
        "romanization": ""
    },
    {
        "id": 445,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "이것은 방 열쇠입니다.",
        "vietnamese": "Đây là chìa khóa phòng.",
        "romanization": ""
    },
    {
        "id": 446,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "카드 키입니다.",
        "vietnamese": "Đây là thẻ phòng.",
        "romanization": ""
    },
    {
        "id": 447,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "짐을 도와드릴까요?",
        "vietnamese": "Tôi có thể giúp hành lý không?",
        "romanization": ""
    },
    {
        "id": 448,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "네, 부탁합니다.",
        "vietnamese": "Vâng, làm ơn.",
        "romanization": ""
    },
    {
        "id": 449,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "짐이 많습니다.",
        "vietnamese": "Tôi có nhiều hành lý.",
        "romanization": ""
    },
    {
        "id": 450,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "직원이 도와드리겠습니다.",
        "vietnamese": "Nhân viên sẽ giúp bạn.",
        "romanization": ""
    },
    {
        "id": 451,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "수영장이 있습니까?",
        "vietnamese": "Có hồ bơi không?",
        "romanization": ""
    },
    {
        "id": 452,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 453,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "헬스장이 있습니까?",
        "vietnamese": "Có phòng gym không?",
        "romanization": ""
    },
    {
        "id": 454,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 455,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "몇 시까지 이용할 수 있습니까?",
        "vietnamese": "Có thể dùng đến mấy giờ?",
        "romanization": ""
    },
    {
        "id": 456,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "밤 10시까지입니다.",
        "vietnamese": "Đến 10 giờ tối.",
        "romanization": ""
    },
    {
        "id": 457,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "세탁 서비스가 있습니까?",
        "vietnamese": "Có dịch vụ giặt là không?",
        "romanization": ""
    },
    {
        "id": 458,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 459,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "청소는 언제 합니까?",
        "vietnamese": "Khi nào dọn phòng?",
        "romanization": ""
    },
    {
        "id": 460,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "매일 합니다.",
        "vietnamese": "Mỗi ngày.",
        "romanization": ""
    },
    {
        "id": 461,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "추가 수건을 받을 수 있습니까?",
        "vietnamese": "Tôi có thể lấy thêm khăn không?",
        "romanization": ""
    },
    {
        "id": 462,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 463,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "물 한 병 더 주세요.",
        "vietnamese": "Cho tôi thêm một chai nước.",
        "romanization": ""
    },
    {
        "id": 464,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "곧 가져다 드리겠습니다.",
        "vietnamese": "Chúng tôi sẽ mang lên ngay.",
        "romanization": ""
    },
    {
        "id": 465,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "에어컨이 작동하지 않습니다.",
        "vietnamese": "Điều hòa không hoạt động.",
        "romanization": ""
    },
    {
        "id": 466,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "직원을 보내겠습니다.",
        "vietnamese": "Chúng tôi sẽ cử nhân viên đến.",
        "romanization": ""
    },
    {
        "id": 467,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "방을 바꿀 수 있습니까?",
        "vietnamese": "Tôi có thể đổi phòng không?",
        "romanization": ""
    },
    {
        "id": 468,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "확인해 보겠습니다.",
        "vietnamese": "Chúng tôi sẽ kiểm tra.",
        "romanization": ""
    },
    {
        "id": 469,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "가능합니다.",
        "vietnamese": "Có thể.",
        "romanization": ""
    },
    {
        "id": 470,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "짐을 옮겨 드리겠습니다.",
        "vietnamese": "Chúng tôi sẽ chuyển hành lý.",
        "romanization": ""
    },
    {
        "id": 471,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "도와주셔서 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giúp đỡ.",
        "romanization": ""
    },
    {
        "id": 472,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "천만에요.",
        "vietnamese": "Không có gì.",
        "romanization": ""
    },
    {
        "id": 473,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "체크아웃은 몇 시입니까?",
        "vietnamese": "Check-out lúc mấy giờ?",
        "romanization": ""
    },
    {
        "id": 474,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "오전 11시입니다.",
        "vietnamese": "11 giờ sáng.",
        "romanization": ""
    },
    {
        "id": 475,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "늦게 체크아웃할 수 있습니까?",
        "vietnamese": "Tôi có thể check-out muộn không?",
        "romanization": ""
    },
    {
        "id": 476,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "추가 요금이 있습니다.",
        "vietnamese": "Có phí phụ thu.",
        "romanization": ""
    },
    {
        "id": 477,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "괜찮습니다.",
        "vietnamese": "Không sao.",
        "romanization": ""
    },
    {
        "id": 478,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "공항까지 택시를 불러 주세요.",
        "vietnamese": "Hãy gọi taxi ra sân bay giúp tôi.",
        "romanization": ""
    },
    {
        "id": 479,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "네, 알겠습니다.",
        "vietnamese": "Vâng, tôi hiểu rồi.",
        "romanization": ""
    },
    {
        "id": 480,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "몇 시에 필요하십니까?",
        "vietnamese": "Bạn cần lúc mấy giờ?",
        "romanization": ""
    },
    {
        "id": 481,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "아침 7시에 부탁합니다.",
        "vietnamese": "Làm ơn lúc 7h sáng.",
        "romanization": ""
    },
    {
        "id": 482,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "예약해 드리겠습니다.",
        "vietnamese": "Chúng tôi sẽ đặt giúp bạn.",
        "romanization": ""
    },
    {
        "id": 483,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "모닝콜을 부탁합니다.",
        "vietnamese": "Tôi muốn đặt báo thức.",
        "romanization": ""
    },
    {
        "id": 484,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "몇 시에 깨워 드릴까요?",
        "vietnamese": "Bạn muốn đánh thức lúc mấy giờ?",
        "romanization": ""
    },
    {
        "id": 485,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "아침 6시에 부탁합니다.",
        "vietnamese": "Làm ơn lúc 6h sáng.",
        "romanization": ""
    },
    {
        "id": 486,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "알겠습니다.",
        "vietnamese": "Được rồi.",
        "romanization": ""
    },
    {
        "id": 487,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "편안한 숙박 되세요.",
        "vietnamese": "Chúc bạn ở thoải mái.",
        "romanization": ""
    },
    {
        "id": 488,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 489,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "문제가 있으면 연락하세요.",
        "vietnamese": "Nếu có vấn đề hãy liên hệ.",
        "romanization": ""
    },
    {
        "id": 490,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "프런트로 전화하세요.",
        "vietnamese": "Hãy gọi xuống lễ tân.",
        "romanization": ""
    },
    {
        "id": 491,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "번호는 0번입니다.",
        "vietnamese": "Số là số 0.",
        "romanization": ""
    },
    {
        "id": 492,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "도와드리겠습니다.",
        "vietnamese": "Chúng tôi sẽ giúp bạn.",
        "romanization": ""
    },
    {
        "id": 493,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "좋은 여행 되세요.",
        "vietnamese": "Chúc chuyến du lịch vui vẻ.",
        "romanization": ""
    },
    {
        "id": 494,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 495,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "안녕히 주무세요.",
        "vietnamese": "Chúc ngủ ngon.",
        "romanization": ""
    },
    {
        "id": 496,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "안녕히 계세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 497,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "내일 뵙겠습니다.",
        "vietnamese": "Hẹn gặp ngày mai.",
        "romanization": ""
    },
    {
        "id": 498,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "즐거운 여행 되세요.",
        "vietnamese": "Chúc chuyến đi vui vẻ.",
        "romanization": ""
    },
    {
        "id": 499,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "다시 방문해 주세요.",
        "vietnamese": "Hãy quay lại lần nữa.",
        "romanization": ""
    },
    {
        "id": 500,
        "topic": "tinh-huong-5",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc bạn một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 501,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "식당이 어디에 있습니까?",
        "vietnamese": "Nhà hàng ở đâu?",
        "romanization": ""
    },
    {
        "id": 502,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "이 근처에 식당이 있습니까?",
        "vietnamese": "Gần đây có nhà hàng không?",
        "romanization": ""
    },
    {
        "id": 503,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 504,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "추천해 주세요.",
        "vietnamese": "Hãy giới thiệu giúp tôi.",
        "romanization": ""
    },
    {
        "id": 505,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "한국 음식 식당이 있습니까?",
        "vietnamese": "Có nhà hàng món Hàn không?",
        "romanization": ""
    },
    {
        "id": 506,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "저기 있습니다.",
        "vietnamese": "Ở đằng kia.",
        "romanization": ""
    },
    {
        "id": 507,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "예약하셨습니까?",
        "vietnamese": "Bạn đã đặt bàn chưa?",
        "romanization": ""
    },
    {
        "id": 508,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "아니요, 예약하지 않았습니다.",
        "vietnamese": "Không, tôi chưa đặt.",
        "romanization": ""
    },
    {
        "id": 509,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "몇 분이세요?",
        "vietnamese": "Mấy người vậy?",
        "romanization": ""
    },
    {
        "id": 510,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "두 명입니다.",
        "vietnamese": "Hai người.",
        "romanization": ""
    },
    {
        "id": 511,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "이쪽으로 오세요.",
        "vietnamese": "Mời đi lối này.",
        "romanization": ""
    },
    {
        "id": 512,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "여기 앉으세요.",
        "vietnamese": "Mời ngồi đây.",
        "romanization": ""
    },
    {
        "id": 513,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "메뉴판 주세요.",
        "vietnamese": "Cho tôi menu.",
        "romanization": ""
    },
    {
        "id": 514,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "네, 여기 있습니다.",
        "vietnamese": "Vâng, đây ạ.",
        "romanization": ""
    },
    {
        "id": 515,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "추천 메뉴가 무엇입니까?",
        "vietnamese": "Món nào được giới thiệu?",
        "romanization": ""
    },
    {
        "id": 516,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "불고기가 유명합니다.",
        "vietnamese": "Bulgogi rất nổi tiếng.",
        "romanization": ""
    },
    {
        "id": 517,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "김치찌개도 맛있습니다.",
        "vietnamese": "Kimchi jjigae cũng ngon.",
        "romanization": ""
    },
    {
        "id": 518,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "이거 주세요.",
        "vietnamese": "Cho tôi món này.",
        "romanization": ""
    },
    {
        "id": 519,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "불고기 하나 주세요.",
        "vietnamese": "Cho tôi một bulgogi.",
        "romanization": ""
    },
    {
        "id": 520,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "김치찌개 하나 주세요.",
        "vietnamese": "Cho tôi một kimchi jjigae.",
        "romanization": ""
    },
    {
        "id": 521,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "밥도 주세요.",
        "vietnamese": "Cho tôi cơm nữa.",
        "romanization": ""
    },
    {
        "id": 522,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "음료수는 무엇이 있습니까?",
        "vietnamese": "Có đồ uống gì?",
        "romanization": ""
    },
    {
        "id": 523,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "콜라, 사이다, 물이 있습니다.",
        "vietnamese": "Có cola, soda và nước.",
        "romanization": ""
    },
    {
        "id": 524,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "물 주세요.",
        "vietnamese": "Cho tôi nước.",
        "romanization": ""
    },
    {
        "id": 525,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "콜라 하나 주세요.",
        "vietnamese": "Cho tôi một cola.",
        "romanization": ""
    },
    {
        "id": 526,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "맥주는 있습니까?",
        "vietnamese": "Có bia không?",
        "romanization": ""
    },
    {
        "id": 527,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 528,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "맥주 하나 주세요.",
        "vietnamese": "Cho tôi một bia.",
        "romanization": ""
    },
    {
        "id": 529,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "얼마나 걸립니까?",
        "vietnamese": "Mất bao lâu?",
        "romanization": ""
    },
    {
        "id": 530,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "10분 정도 걸립니다.",
        "vietnamese": "Khoảng 10 phút.",
        "romanization": ""
    },
    {
        "id": 531,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "알겠습니다.",
        "vietnamese": "Tôi hiểu rồi.",
        "romanization": ""
    },
    {
        "id": 532,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "조금 기다려 주세요.",
        "vietnamese": "Hãy chờ một chút.",
        "romanization": ""
    },
    {
        "id": 533,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "음식 나왔습니다.",
        "vietnamese": "Món ăn đã ra rồi.",
        "romanization": ""
    },
    {
        "id": 534,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "맛있게 드세요.",
        "vietnamese": "Chúc ngon miệng.",
        "romanization": ""
    },
    {
        "id": 535,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 536,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "정말 맛있습니다.",
        "vietnamese": "Thật sự rất ngon.",
        "romanization": ""
    },
    {
        "id": 537,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "조금 맵습니다.",
        "vietnamese": "Hơi cay.",
        "romanization": ""
    },
    {
        "id": 538,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "덜 맵게 해 주세요.",
        "vietnamese": "Hãy làm ít cay hơn.",
        "romanization": ""
    },
    {
        "id": 539,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "물 좀 더 주세요.",
        "vietnamese": "Cho tôi thêm nước.",
        "romanization": ""
    },
    {
        "id": 540,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "반찬을 더 주세요.",
        "vietnamese": "Cho thêm đồ ăn kèm.",
        "romanization": ""
    },
    {
        "id": 541,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "네, 알겠습니다.",
        "vietnamese": "Vâng, tôi hiểu.",
        "romanization": ""
    },
    {
        "id": 542,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "김치를 더 주세요.",
        "vietnamese": "Cho thêm kimchi.",
        "romanization": ""
    },
    {
        "id": 543,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "숟가락 주세요.",
        "vietnamese": "Cho tôi thìa.",
        "romanization": ""
    },
    {
        "id": 544,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "젓가락 주세요.",
        "vietnamese": "Cho tôi đũa.",
        "romanization": ""
    },
    {
        "id": 545,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "포크 있습니까?",
        "vietnamese": "Có nĩa không?",
        "romanization": ""
    },
    {
        "id": 546,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 547,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "포크 주세요.",
        "vietnamese": "Cho tôi nĩa.",
        "romanization": ""
    },
    {
        "id": 548,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "냅킨 주세요.",
        "vietnamese": "Cho tôi khăn giấy.",
        "romanization": ""
    },
    {
        "id": 549,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "휴지가 어디에 있습니까?",
        "vietnamese": "Khăn giấy ở đâu?",
        "romanization": ""
    },
    {
        "id": 550,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "여기 있습니다.",
        "vietnamese": "Ở đây.",
        "romanization": ""
    },
    {
        "id": 551,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "음식이 정말 맛있습니다.",
        "vietnamese": "Món ăn thật sự ngon.",
        "romanization": ""
    },
    {
        "id": 552,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "한국 음식이 좋습니다.",
        "vietnamese": "Tôi thích đồ ăn Hàn Quốc.",
        "romanization": ""
    },
    {
        "id": 553,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "처음 먹어 봅니다.",
        "vietnamese": "Tôi ăn lần đầu.",
        "romanization": ""
    },
    {
        "id": 554,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "매우 만족합니다.",
        "vietnamese": "Tôi rất hài lòng.",
        "romanization": ""
    },
    {
        "id": 555,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "조금 짭니다.",
        "vietnamese": "Hơi mặn.",
        "romanization": ""
    },
    {
        "id": 556,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "괜찮습니다.",
        "vietnamese": "Không sao.",
        "romanization": ""
    },
    {
        "id": 557,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "포장해 주세요.",
        "vietnamese": "Hãy gói mang đi.",
        "romanization": ""
    },
    {
        "id": 558,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "남은 음식 포장해 주세요.",
        "vietnamese": "Gói phần ăn còn lại giúp tôi.",
        "romanization": ""
    },
    {
        "id": 559,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "네, 포장해 드리겠습니다.",
        "vietnamese": "Vâng, tôi sẽ gói lại.",
        "romanization": ""
    },
    {
        "id": 560,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 561,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "계산해 주세요.",
        "vietnamese": "Tính tiền giúp tôi.",
        "romanization": ""
    },
    {
        "id": 562,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "네, 잠시만요.",
        "vietnamese": "Vâng, xin đợi một chút.",
        "romanization": ""
    },
    {
        "id": 563,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "얼마입니까?",
        "vietnamese": "Bao nhiêu tiền?",
        "romanization": ""
    },
    {
        "id": 564,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "30,000원입니다.",
        "vietnamese": "30.000 won.",
        "romanization": ""
    },
    {
        "id": 565,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "카드로 계산할 수 있습니까?",
        "vietnamese": "Có thể trả bằng thẻ không?",
        "romanization": ""
    },
    {
        "id": 566,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 567,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "현금으로 내겠습니다.",
        "vietnamese": "Tôi trả tiền mặt.",
        "romanization": ""
    },
    {
        "id": 568,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "영수증 주세요.",
        "vietnamese": "Cho tôi hóa đơn.",
        "romanization": ""
    },
    {
        "id": 569,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "여기 영수증입니다.",
        "vietnamese": "Đây là hóa đơn.",
        "romanization": ""
    },
    {
        "id": 570,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 571,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "잘 먹었습니다.",
        "vietnamese": "Tôi đã ăn rất ngon.",
        "romanization": ""
    },
    {
        "id": 572,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "또 오겠습니다.",
        "vietnamese": "Tôi sẽ quay lại.",
        "romanization": ""
    },
    {
        "id": 573,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "안녕히 가세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 574,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc bạn một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 575,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "식당이 깨끗합니다.",
        "vietnamese": "Nhà hàng rất sạch.",
        "romanization": ""
    },
    {
        "id": 576,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "서비스가 좋습니다.",
        "vietnamese": "Dịch vụ tốt.",
        "romanization": ""
    },
    {
        "id": 577,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "직원들이 친절합니다.",
        "vietnamese": "Nhân viên thân thiện.",
        "romanization": ""
    },
    {
        "id": 578,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "이 식당이 유명합니까?",
        "vietnamese": "Nhà hàng này nổi tiếng không?",
        "romanization": ""
    },
    {
        "id": 579,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "네, 유명합니다.",
        "vietnamese": "Vâng, rất nổi tiếng.",
        "romanization": ""
    },
    {
        "id": 580,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "관광객이 많습니다.",
        "vietnamese": "Có nhiều khách du lịch.",
        "romanization": ""
    },
    {
        "id": 581,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "현지 음식입니까?",
        "vietnamese": "Đây là món địa phương à?",
        "romanization": ""
    },
    {
        "id": 582,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "네, 전통 음식입니다.",
        "vietnamese": "Vâng, là món truyền thống.",
        "romanization": ""
    },
    {
        "id": 583,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "추천 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giới thiệu.",
        "romanization": ""
    },
    {
        "id": 584,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "천만에요.",
        "vietnamese": "Không có gì.",
        "romanization": ""
    },
    {
        "id": 585,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "매일 영업합니까?",
        "vietnamese": "Mở cửa mỗi ngày không?",
        "romanization": ""
    },
    {
        "id": 586,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "네, 매일 영업합니다.",
        "vietnamese": "Vâng, mở mỗi ngày.",
        "romanization": ""
    },
    {
        "id": 587,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "몇 시에 닫습니까?",
        "vietnamese": "Mấy giờ đóng cửa?",
        "romanization": ""
    },
    {
        "id": 588,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "밤 10시에 닫습니다.",
        "vietnamese": "Đóng cửa lúc 10 giờ tối.",
        "romanization": ""
    },
    {
        "id": 589,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "알겠습니다.",
        "vietnamese": "Tôi hiểu rồi.",
        "romanization": ""
    },
    {
        "id": 590,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "다음에 또 오겠습니다.",
        "vietnamese": "Lần sau tôi sẽ quay lại.",
        "romanization": ""
    },
    {
        "id": 591,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "한국 음식이 정말 맛있습니다.",
        "vietnamese": "Đồ ăn Hàn Quốc rất ngon.",
        "romanization": ""
    },
    {
        "id": 592,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "좋은 경험이었습니다.",
        "vietnamese": "Đây là trải nghiệm tốt.",
        "romanization": ""
    },
    {
        "id": 593,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "여행이 즐겁습니다.",
        "vietnamese": "Chuyến du lịch rất vui.",
        "romanization": ""
    },
    {
        "id": 594,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "추천 감사합니다.",
        "vietnamese": "Cảm ơn vì gợi ý.",
        "romanization": ""
    },
    {
        "id": 595,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "또 만나요.",
        "vietnamese": "Hẹn gặp lại.",
        "romanization": ""
    },
    {
        "id": 596,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "안녕히 계세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 597,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "좋은 저녁 보내세요.",
        "vietnamese": "Chúc buổi tối tốt lành.",
        "romanization": ""
    },
    {
        "id": 598,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "행복한 하루 되세요.",
        "vietnamese": "Chúc một ngày hạnh phúc.",
        "romanization": ""
    },
    {
        "id": 599,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 600,
        "topic": "tinh-huong-6",
        "level": "a1",
        "korean": "다시 방문하겠습니다.",
        "vietnamese": "Tôi sẽ ghé thăm lại.",
        "romanization": ""
    },
    {
        "id": 601,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "가게가 어디에 있습니까?",
        "vietnamese": "Cửa hàng ở đâu?",
        "romanization": ""
    },
    {
        "id": 602,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "이 근처에 쇼핑몰이 있습니까?",
        "vietnamese": "Gần đây có trung tâm mua sắm không?",
        "romanization": ""
    },
    {
        "id": 603,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 604,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "저쪽에 있습니다.",
        "vietnamese": "Ở phía kia.",
        "romanization": ""
    },
    {
        "id": 605,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "몇 시에 문을 엽니까?",
        "vietnamese": "Mấy giờ mở cửa?",
        "romanization": ""
    },
    {
        "id": 606,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "아침 10시에 엽니다.",
        "vietnamese": "Mở cửa lúc 10 giờ sáng.",
        "romanization": ""
    },
    {
        "id": 607,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "몇 시에 닫습니까?",
        "vietnamese": "Mấy giờ đóng cửa?",
        "romanization": ""
    },
    {
        "id": 608,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "밤 9시에 닫습니다.",
        "vietnamese": "Đóng cửa lúc 9 giờ tối.",
        "romanization": ""
    },
    {
        "id": 609,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "이거 얼마입니까?",
        "vietnamese": "Cái này bao nhiêu tiền?",
        "romanization": ""
    },
    {
        "id": 610,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "20,000원입니다.",
        "vietnamese": "20.000 won.",
        "romanization": ""
    },
    {
        "id": 611,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "조금 비쌉니다.",
        "vietnamese": "Hơi đắt.",
        "romanization": ""
    },
    {
        "id": 612,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "할인 있습니까?",
        "vietnamese": "Có giảm giá không?",
        "romanization": ""
    },
    {
        "id": 613,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "네, 할인 있습니다.",
        "vietnamese": "Vâng, có giảm giá.",
        "romanization": ""
    },
    {
        "id": 614,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "얼마까지 할인합니까?",
        "vietnamese": "Giảm đến bao nhiêu?",
        "romanization": ""
    },
    {
        "id": 615,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "10% 할인합니다.",
        "vietnamese": "Giảm 10%.",
        "romanization": ""
    },
    {
        "id": 616,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "조금 더 싸게 해 주세요.",
        "vietnamese": "Hãy giảm giá thêm chút.",
        "romanization": ""
    },
    {
        "id": 617,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "죄송하지만 어렵습니다.",
        "vietnamese": "Xin lỗi nhưng khó.",
        "romanization": ""
    },
    {
        "id": 618,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "알겠습니다.",
        "vietnamese": "Tôi hiểu rồi.",
        "romanization": ""
    },
    {
        "id": 619,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "이거 좋아 보입니다.",
        "vietnamese": "Cái này trông đẹp.",
        "romanization": ""
    },
    {
        "id": 620,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "색깔이 마음에 듭니다.",
        "vietnamese": "Tôi thích màu này.",
        "romanization": ""
    },
    {
        "id": 621,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "다른 색이 있습니까?",
        "vietnamese": "Có màu khác không?",
        "romanization": ""
    },
    {
        "id": 622,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 623,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "이 색도 있습니다.",
        "vietnamese": "Có màu này nữa.",
        "romanization": ""
    },
    {
        "id": 624,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "사이즈가 있습니까?",
        "vietnamese": "Có size không?",
        "romanization": ""
    },
    {
        "id": 625,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 626,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "M 사이즈 주세요.",
        "vietnamese": "Cho tôi size M.",
        "romanization": ""
    },
    {
        "id": 627,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "L 사이즈 있습니까?",
        "vietnamese": "Có size L không?",
        "romanization": ""
    },
    {
        "id": 628,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "죄송하지만 없습니다.",
        "vietnamese": "Xin lỗi nhưng không có.",
        "romanization": ""
    },
    {
        "id": 629,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "입어 봐도 됩니까?",
        "vietnamese": "Tôi thử được không?",
        "romanization": ""
    },
    {
        "id": 630,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 631,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "탈의실이 어디에 있습니까?",
        "vietnamese": "Phòng thử đồ ở đâu?",
        "romanization": ""
    },
    {
        "id": 632,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "저쪽에 있습니다.",
        "vietnamese": "Ở phía kia.",
        "romanization": ""
    },
    {
        "id": 633,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "조금 큽니다.",
        "vietnamese": "Hơi rộng.",
        "romanization": ""
    },
    {
        "id": 634,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "조금 작습니다.",
        "vietnamese": "Hơi chật.",
        "romanization": ""
    },
    {
        "id": 635,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "다른 사이즈 주세요.",
        "vietnamese": "Cho tôi size khác.",
        "romanization": ""
    },
    {
        "id": 636,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "이 사이즈가 좋습니다.",
        "vietnamese": "Size này vừa.",
        "romanization": ""
    },
    {
        "id": 637,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "정말 마음에 듭니다.",
        "vietnamese": "Tôi rất thích.",
        "romanization": ""
    },
    {
        "id": 638,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "이거 살게요.",
        "vietnamese": "Tôi sẽ mua cái này.",
        "romanization": ""
    },
    {
        "id": 639,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "이것도 주세요.",
        "vietnamese": "Cho tôi cả cái này nữa.",
        "romanization": ""
    },
    {
        "id": 640,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "두 개 주세요.",
        "vietnamese": "Cho tôi hai cái.",
        "romanization": ""
    },
    {
        "id": 641,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "선물용입니다.",
        "vietnamese": "Đây là để làm quà.",
        "romanization": ""
    },
    {
        "id": 642,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "포장해 주세요.",
        "vietnamese": "Hãy gói lại giúp tôi.",
        "romanization": ""
    },
    {
        "id": 643,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "네, 포장해 드리겠습니다.",
        "vietnamese": "Vâng, tôi sẽ gói.",
        "romanization": ""
    },
    {
        "id": 644,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "계산은 어디에서 합니까?",
        "vietnamese": "Thanh toán ở đâu?",
        "romanization": ""
    },
    {
        "id": 645,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "저쪽 계산대에서 합니다.",
        "vietnamese": "Thanh toán ở quầy kia.",
        "romanization": ""
    },
    {
        "id": 646,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "카드로 계산할 수 있습니까?",
        "vietnamese": "Có thể trả bằng thẻ không?",
        "romanization": ""
    },
    {
        "id": 647,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 648,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "현금으로 내겠습니다.",
        "vietnamese": "Tôi trả tiền mặt.",
        "romanization": ""
    },
    {
        "id": 649,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "영수증 주세요.",
        "vietnamese": "Cho tôi hóa đơn.",
        "romanization": ""
    },
    {
        "id": 650,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "여기 영수증입니다.",
        "vietnamese": "Đây là hóa đơn.",
        "romanization": ""
    },
    {
        "id": 651,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "쇼핑백 주세요.",
        "vietnamese": "Cho tôi túi mua sắm.",
        "romanization": ""
    },
    {
        "id": 652,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "네, 여기 있습니다.",
        "vietnamese": "Vâng, đây ạ.",
        "romanization": ""
    },
    {
        "id": 653,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 654,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "천만에요.",
        "vietnamese": "Không có gì.",
        "romanization": ""
    },
    {
        "id": 655,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "이 가게가 유명합니까?",
        "vietnamese": "Cửa hàng này nổi tiếng không?",
        "romanization": ""
    },
    {
        "id": 656,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "네, 유명합니다.",
        "vietnamese": "Vâng, rất nổi tiếng.",
        "romanization": ""
    },
    {
        "id": 657,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "관광객이 많이 옵니다.",
        "vietnamese": "Nhiều khách du lịch đến.",
        "romanization": ""
    },
    {
        "id": 658,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "품질이 좋습니다.",
        "vietnamese": "Chất lượng tốt.",
        "romanization": ""
    },
    {
        "id": 659,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "가격이 괜찮습니다.",
        "vietnamese": "Giá cả hợp lý.",
        "romanization": ""
    },
    {
        "id": 660,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "세일 중입니까?",
        "vietnamese": "Đang giảm giá không?",
        "romanization": ""
    },
    {
        "id": 661,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "네, 세일 중입니다.",
        "vietnamese": "Vâng, đang giảm giá.",
        "romanization": ""
    },
    {
        "id": 662,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "몇 퍼센트 세일입니까?",
        "vietnamese": "Giảm bao nhiêu phần trăm?",
        "romanization": ""
    },
    {
        "id": 663,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "20% 세일입니다.",
        "vietnamese": "Giảm 20%.",
        "romanization": ""
    },
    {
        "id": 664,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "좋습니다.",
        "vietnamese": "Tốt.",
        "romanization": ""
    },
    {
        "id": 665,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "이거 두 개 주세요.",
        "vietnamese": "Cho tôi hai cái này.",
        "romanization": ""
    },
    {
        "id": 666,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "친구 선물입니다.",
        "vietnamese": "Đây là quà cho bạn.",
        "romanization": ""
    },
    {
        "id": 667,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "가족 선물입니다.",
        "vietnamese": "Đây là quà cho gia đình.",
        "romanization": ""
    },
    {
        "id": 668,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "한국 기념품입니까?",
        "vietnamese": "Đây là quà lưu niệm Hàn Quốc à?",
        "romanization": ""
    },
    {
        "id": 669,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "네, 기념품입니다.",
        "vietnamese": "Vâng, là quà lưu niệm.",
        "romanization": ""
    },
    {
        "id": 670,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "인기가 많습니다.",
        "vietnamese": "Rất được ưa chuộng.",
        "romanization": ""
    },
    {
        "id": 671,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "추천 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giới thiệu.",
        "romanization": ""
    },
    {
        "id": 672,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "천만에요.",
        "vietnamese": "Không có gì.",
        "romanization": ""
    },
    {
        "id": 673,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "다른 상품도 있습니까?",
        "vietnamese": "Có sản phẩm khác không?",
        "romanization": ""
    },
    {
        "id": 674,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "네, 많이 있습니다.",
        "vietnamese": "Vâng, có nhiều.",
        "romanization": ""
    },
    {
        "id": 675,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "구경해 보세요.",
        "vietnamese": "Hãy xem thử.",
        "romanization": ""
    },
    {
        "id": 676,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "잠깐만요.",
        "vietnamese": "Xin chờ chút.",
        "romanization": ""
    },
    {
        "id": 677,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "생각해 보겠습니다.",
        "vietnamese": "Tôi sẽ suy nghĩ thêm.",
        "romanization": ""
    },
    {
        "id": 678,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "조금 둘러보겠습니다.",
        "vietnamese": "Tôi sẽ xem thêm một chút.",
        "romanization": ""
    },
    {
        "id": 679,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "필요하면 말씀하세요.",
        "vietnamese": "Nếu cần hãy nói nhé.",
        "romanization": ""
    },
    {
        "id": 680,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "네, 감사합니다.",
        "vietnamese": "Vâng, cảm ơn.",
        "romanization": ""
    },
    {
        "id": 681,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "이 가게가 마음에 듭니다.",
        "vietnamese": "Tôi thích cửa hàng này.",
        "romanization": ""
    },
    {
        "id": 682,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "서비스가 좋습니다.",
        "vietnamese": "Dịch vụ tốt.",
        "romanization": ""
    },
    {
        "id": 683,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "직원이 친절합니다.",
        "vietnamese": "Nhân viên thân thiện.",
        "romanization": ""
    },
    {
        "id": 684,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "쇼핑이 즐겁습니다.",
        "vietnamese": "Mua sắm rất vui.",
        "romanization": ""
    },
    {
        "id": 685,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "한국 쇼핑이 재미있습니다.",
        "vietnamese": "Mua sắm ở Hàn Quốc rất thú vị.",
        "romanization": ""
    },
    {
        "id": 686,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "많이 샀습니다.",
        "vietnamese": "Tôi đã mua nhiều đồ.",
        "romanization": ""
    },
    {
        "id": 687,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "짐이 많습니다.",
        "vietnamese": "Tôi có nhiều hành lý.",
        "romanization": ""
    },
    {
        "id": 688,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "도와주셔서 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giúp.",
        "romanization": ""
    },
    {
        "id": 689,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 690,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "또 오겠습니다.",
        "vietnamese": "Tôi sẽ quay lại.",
        "romanization": ""
    },
    {
        "id": 691,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "안녕히 가세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 692,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "행복한 하루 되세요.",
        "vietnamese": "Chúc một ngày hạnh phúc.",
        "romanization": ""
    },
    {
        "id": 693,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "여행이 즐겁습니다.",
        "vietnamese": "Chuyến du lịch rất vui.",
        "romanization": ""
    },
    {
        "id": 694,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "좋은 경험이었습니다.",
        "vietnamese": "Đây là trải nghiệm tốt.",
        "romanization": ""
    },
    {
        "id": 695,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "한국이 좋습니다.",
        "vietnamese": "Tôi thích Hàn Quốc.",
        "romanization": ""
    },
    {
        "id": 696,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "다시 방문하겠습니다.",
        "vietnamese": "Tôi sẽ quay lại.",
        "romanization": ""
    },
    {
        "id": 697,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 698,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "또 만나요.",
        "vietnamese": "Hẹn gặp lại.",
        "romanization": ""
    },
    {
        "id": 699,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "좋은 저녁 보내세요.",
        "vietnamese": "Chúc buổi tối tốt lành.",
        "romanization": ""
    },
    {
        "id": 700,
        "topic": "tinh-huong-7",
        "level": "a1",
        "korean": "안녕히 계세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 701,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "지하철역이 어디에 있습니까?",
        "vietnamese": "Ga tàu điện ở đâu?",
        "romanization": ""
    },
    {
        "id": 702,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "이 근처에 버스 정류장이 있습니까?",
        "vietnamese": "Gần đây có trạm xe buýt không?",
        "romanization": ""
    },
    {
        "id": 703,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 704,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "저쪽에 있습니다.",
        "vietnamese": "Ở phía kia.",
        "romanization": ""
    },
    {
        "id": 705,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "지하철을 타고 싶습니다.",
        "vietnamese": "Tôi muốn đi tàu điện.",
        "romanization": ""
    },
    {
        "id": 706,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "버스를 타고 싶습니다.",
        "vietnamese": "Tôi muốn đi xe buýt.",
        "romanization": ""
    },
    {
        "id": 707,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "어떤 버스를 타야 합니까?",
        "vietnamese": "Tôi phải đi xe buýt nào?",
        "romanization": ""
    },
    {
        "id": 708,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "몇 번 버스를 타세요.",
        "vietnamese": "Hãy đi xe buýt số mấy.",
        "romanization": ""
    },
    {
        "id": 709,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "이 버스는 시청에 갑니까?",
        "vietnamese": "Xe buýt này có đến tòa thị chính không?",
        "romanization": ""
    },
    {
        "id": 710,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "네, 갑니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 711,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "지하철 노선도가 있습니까?",
        "vietnamese": "Có bản đồ tàu điện không?",
        "romanization": ""
    },
    {
        "id": 712,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "네, 여기 있습니다.",
        "vietnamese": "Vâng, đây ạ.",
        "romanization": ""
    },
    {
        "id": 713,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "어디에서 표를 삽니까?",
        "vietnamese": "Mua vé ở đâu?",
        "romanization": ""
    },
    {
        "id": 714,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "자동판매기에서 삽니다.",
        "vietnamese": "Mua ở máy bán vé.",
        "romanization": ""
    },
    {
        "id": 715,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "카드로 결제할 수 있습니까?",
        "vietnamese": "Có thể trả bằng thẻ không?",
        "romanization": ""
    },
    {
        "id": 716,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 717,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "교통카드가 있습니까?",
        "vietnamese": "Bạn có thẻ giao thông không?",
        "romanization": ""
    },
    {
        "id": 718,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "아니요, 없습니다.",
        "vietnamese": "Không, tôi không có.",
        "romanization": ""
    },
    {
        "id": 719,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "교통카드를 사고 싶습니다.",
        "vietnamese": "Tôi muốn mua thẻ giao thông.",
        "romanization": ""
    },
    {
        "id": 720,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "얼마입니까?",
        "vietnamese": "Bao nhiêu tiền?",
        "romanization": ""
    },
    {
        "id": 721,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "5,000원입니다.",
        "vietnamese": "5.000 won.",
        "romanization": ""
    },
    {
        "id": 722,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "충전하고 싶습니다.",
        "vietnamese": "Tôi muốn nạp tiền.",
        "romanization": ""
    },
    {
        "id": 723,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "얼마 충전하시겠습니까?",
        "vietnamese": "Bạn muốn nạp bao nhiêu?",
        "romanization": ""
    },
    {
        "id": 724,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "10,000원 충전해 주세요.",
        "vietnamese": "Nạp 10.000 won giúp tôi.",
        "romanization": ""
    },
    {
        "id": 725,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "네, 알겠습니다.",
        "vietnamese": "Vâng, tôi hiểu rồi.",
        "romanization": ""
    },
    {
        "id": 726,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "이 지하철은 어디로 갑니까?",
        "vietnamese": "Tàu điện này đi đâu?",
        "romanization": ""
    },
    {
        "id": 727,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "서울역으로 갑니다.",
        "vietnamese": "Đi đến ga Seoul.",
        "romanization": ""
    },
    {
        "id": 728,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "몇 정거장입니까?",
        "vietnamese": "Mấy trạm?",
        "romanization": ""
    },
    {
        "id": 729,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "세 정거장입니다.",
        "vietnamese": "Ba trạm.",
        "romanization": ""
    },
    {
        "id": 730,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "환승해야 합니까?",
        "vietnamese": "Có phải chuyển tuyến không?",
        "romanization": ""
    },
    {
        "id": 731,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "네, 환승해야 합니다.",
        "vietnamese": "Vâng, phải chuyển tuyến.",
        "romanization": ""
    },
    {
        "id": 732,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "어디에서 환승합니까?",
        "vietnamese": "Chuyển tuyến ở đâu?",
        "romanization": ""
    },
    {
        "id": 733,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "다음 역에서 환승하세요.",
        "vietnamese": "Hãy chuyển ở trạm tiếp theo.",
        "romanization": ""
    },
    {
        "id": 734,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "이 버스는 공항에 갑니까?",
        "vietnamese": "Xe buýt này có đến sân bay không?",
        "romanization": ""
    },
    {
        "id": 735,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "아니요, 안 갑니다.",
        "vietnamese": "Không, không đến.",
        "romanization": ""
    },
    {
        "id": 736,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "공항 버스는 어디에서 탑니까?",
        "vietnamese": "Bắt xe buýt sân bay ở đâu?",
        "romanization": ""
    },
    {
        "id": 737,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "저쪽 정류장에서 탑니다.",
        "vietnamese": "Bắt ở trạm phía kia.",
        "romanization": ""
    },
    {
        "id": 738,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "지금 버스가 옵니까?",
        "vietnamese": "Xe buýt sắp đến chưa?",
        "romanization": ""
    },
    {
        "id": 739,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "네, 곧 옵니다.",
        "vietnamese": "Vâng, sắp đến.",
        "romanization": ""
    },
    {
        "id": 740,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "얼마나 기다려야 합니까?",
        "vietnamese": "Phải chờ bao lâu?",
        "romanization": ""
    },
    {
        "id": 741,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "약 5분입니다.",
        "vietnamese": "Khoảng 5 phút.",
        "romanization": ""
    },
    {
        "id": 742,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "버스가 왔습니다.",
        "vietnamese": "Xe buýt đến rồi.",
        "romanization": ""
    },
    {
        "id": 743,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "여기에서 탑니다.",
        "vietnamese": "Lên xe ở đây.",
        "romanization": ""
    },
    {
        "id": 744,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "카드를 찍으세요.",
        "vietnamese": "Hãy quẹt thẻ.",
        "romanization": ""
    },
    {
        "id": 745,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "네, 알겠습니다.",
        "vietnamese": "Vâng, tôi hiểu.",
        "romanization": ""
    },
    {
        "id": 746,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "자리가 있습니까?",
        "vietnamese": "Có chỗ ngồi không?",
        "romanization": ""
    },
    {
        "id": 747,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 748,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "여기 앉으세요.",
        "vietnamese": "Hãy ngồi đây.",
        "romanization": ""
    },
    {
        "id": 749,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 750,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "천만에요.",
        "vietnamese": "Không có gì.",
        "romanization": ""
    },
    {
        "id": 751,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "다음 정류장이 어디입니까?",
        "vietnamese": "Trạm tiếp theo là đâu?",
        "romanization": ""
    },
    {
        "id": 752,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "다음은 강남역입니다.",
        "vietnamese": "Tiếp theo là ga Gangnam.",
        "romanization": ""
    },
    {
        "id": 753,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "여기에서 내려야 합니까?",
        "vietnamese": "Tôi phải xuống ở đây không?",
        "romanization": ""
    },
    {
        "id": 754,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "네, 여기에서 내리세요.",
        "vietnamese": "Vâng, hãy xuống ở đây.",
        "romanization": ""
    },
    {
        "id": 755,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "문이 열립니다.",
        "vietnamese": "Cửa sẽ mở.",
        "romanization": ""
    },
    {
        "id": 756,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "조심하세요.",
        "vietnamese": "Hãy cẩn thận.",
        "romanization": ""
    },
    {
        "id": 757,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "내리겠습니다.",
        "vietnamese": "Tôi sẽ xuống.",
        "romanization": ""
    },
    {
        "id": 758,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 759,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 760,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "안녕히 가세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 761,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "지하철이 빠릅니다.",
        "vietnamese": "Tàu điện rất nhanh.",
        "romanization": ""
    },
    {
        "id": 762,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "버스가 편합니다.",
        "vietnamese": "Xe buýt rất tiện.",
        "romanization": ""
    },
    {
        "id": 763,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "사람이 많습니다.",
        "vietnamese": "Rất đông người.",
        "romanization": ""
    },
    {
        "id": 764,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "조금 붐빕니다.",
        "vietnamese": "Hơi đông.",
        "romanization": ""
    },
    {
        "id": 765,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "출근 시간입니다.",
        "vietnamese": "Đang là giờ cao điểm.",
        "romanization": ""
    },
    {
        "id": 766,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "조금 기다려 주세요.",
        "vietnamese": "Hãy chờ một chút.",
        "romanization": ""
    },
    {
        "id": 767,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "다음 버스를 타겠습니다.",
        "vietnamese": "Tôi sẽ đi chuyến sau.",
        "romanization": ""
    },
    {
        "id": 768,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "괜찮습니다.",
        "vietnamese": "Không sao.",
        "romanization": ""
    },
    {
        "id": 769,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "길을 잘 모르겠습니다.",
        "vietnamese": "Tôi không biết đường.",
        "romanization": ""
    },
    {
        "id": 770,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "도와주시겠습니까?",
        "vietnamese": "Bạn có thể giúp tôi không?",
        "romanization": ""
    },
    {
        "id": 771,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "네, 도와드리겠습니다.",
        "vietnamese": "Vâng, tôi sẽ giúp.",
        "romanization": ""
    },
    {
        "id": 772,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "어디에 가고 싶습니까?",
        "vietnamese": "Bạn muốn đi đâu?",
        "romanization": ""
    },
    {
        "id": 773,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "박물관에 가고 싶습니다.",
        "vietnamese": "Tôi muốn đến bảo tàng.",
        "romanization": ""
    },
    {
        "id": 774,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "지하철을 타세요.",
        "vietnamese": "Hãy đi tàu điện.",
        "romanization": ""
    },
    {
        "id": 775,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "두 정거장입니다.",
        "vietnamese": "Hai trạm.",
        "romanization": ""
    },
    {
        "id": 776,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "그 다음에 버스를 타세요.",
        "vietnamese": "Sau đó đi xe buýt.",
        "romanization": ""
    },
    {
        "id": 777,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "알겠습니다.",
        "vietnamese": "Tôi hiểu rồi.",
        "romanization": ""
    },
    {
        "id": 778,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "도와주셔서 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giúp.",
        "romanization": ""
    },
    {
        "id": 779,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "천만에요.",
        "vietnamese": "Không có gì.",
        "romanization": ""
    },
    {
        "id": 780,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "좋은 여행 되세요.",
        "vietnamese": "Chúc chuyến đi tốt đẹp.",
        "romanization": ""
    },
    {
        "id": 781,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "한국 교통이 편리합니다.",
        "vietnamese": "Giao thông Hàn Quốc rất tiện.",
        "romanization": ""
    },
    {
        "id": 782,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "지하철이 깨끗합니다.",
        "vietnamese": "Tàu điện rất sạch.",
        "romanization": ""
    },
    {
        "id": 783,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "길 찾기가 쉽습니다.",
        "vietnamese": "Tìm đường rất dễ.",
        "romanization": ""
    },
    {
        "id": 784,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "앱을 사용합니다.",
        "vietnamese": "Tôi dùng ứng dụng.",
        "romanization": ""
    },
    {
        "id": 785,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "지도 앱이 도움이 됩니다.",
        "vietnamese": "Ứng dụng bản đồ rất hữu ích.",
        "romanization": ""
    },
    {
        "id": 786,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "여행이 즐겁습니다.",
        "vietnamese": "Chuyến du lịch rất vui.",
        "romanization": ""
    },
    {
        "id": 787,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "좋은 경험입니다.",
        "vietnamese": "Đây là trải nghiệm tốt.",
        "romanization": ""
    },
    {
        "id": 788,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "한국이 좋습니다.",
        "vietnamese": "Tôi thích Hàn Quốc.",
        "romanization": ""
    },
    {
        "id": 789,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "다시 오고 싶습니다.",
        "vietnamese": "Tôi muốn quay lại.",
        "romanization": ""
    },
    {
        "id": 790,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 791,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "또 만나요.",
        "vietnamese": "Hẹn gặp lại.",
        "romanization": ""
    },
    {
        "id": 792,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "안녕히 계세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 793,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "행복한 하루 되세요.",
        "vietnamese": "Chúc một ngày hạnh phúc.",
        "romanization": ""
    },
    {
        "id": 794,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "좋은 저녁 보내세요.",
        "vietnamese": "Chúc buổi tối tốt lành.",
        "romanization": ""
    },
    {
        "id": 795,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "안녕히 가세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 796,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "여행 잘 하세요.",
        "vietnamese": "Chúc chuyến đi tốt đẹp.",
        "romanization": ""
    },
    {
        "id": 797,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "다시 방문하겠습니다.",
        "vietnamese": "Tôi sẽ quay lại.",
        "romanization": ""
    },
    {
        "id": 798,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "정말 감사합니다.",
        "vietnamese": "Cảm ơn rất nhiều.",
        "romanization": ""
    },
    {
        "id": 799,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 800,
        "topic": "tinh-huong-8",
        "level": "a1",
        "korean": "안녕히 계세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 801,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "병원이 어디에 있습니까?",
        "vietnamese": "Bệnh viện ở đâu?",
        "romanization": ""
    },
    {
        "id": 802,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "이 근처에 병원이 있습니까?",
        "vietnamese": "Gần đây có bệnh viện không?",
        "romanization": ""
    },
    {
        "id": 803,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 804,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "약국이 어디에 있습니까?",
        "vietnamese": "Nhà thuốc ở đâu?",
        "romanization": ""
    },
    {
        "id": 805,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "저쪽에 있습니다.",
        "vietnamese": "Ở phía kia.",
        "romanization": ""
    },
    {
        "id": 806,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "아파서 병원에 가고 싶습니다.",
        "vietnamese": "Tôi bị đau nên muốn đi bệnh viện.",
        "romanization": ""
    },
    {
        "id": 807,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "예약해야 합니까?",
        "vietnamese": "Có cần đặt lịch không?",
        "romanization": ""
    },
    {
        "id": 808,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "네, 예약해야 합니다.",
        "vietnamese": "Vâng, cần đặt lịch.",
        "romanization": ""
    },
    {
        "id": 809,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "지금 진료할 수 있습니까?",
        "vietnamese": "Bây giờ có thể khám không?",
        "romanization": ""
    },
    {
        "id": 810,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 811,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "어디가 아프세요?",
        "vietnamese": "Bạn đau ở đâu?",
        "romanization": ""
    },
    {
        "id": 812,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "머리가 아픕니다.",
        "vietnamese": "Tôi bị đau đầu.",
        "romanization": ""
    },
    {
        "id": 813,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "배가 아픕니다.",
        "vietnamese": "Tôi bị đau bụng.",
        "romanization": ""
    },
    {
        "id": 814,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "목이 아픕니다.",
        "vietnamese": "Tôi bị đau họng.",
        "romanization": ""
    },
    {
        "id": 815,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "열이 있습니다.",
        "vietnamese": "Tôi bị sốt.",
        "romanization": ""
    },
    {
        "id": 816,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "기침이 납니다.",
        "vietnamese": "Tôi bị ho.",
        "romanization": ""
    },
    {
        "id": 817,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "감기에 걸린 것 같습니다.",
        "vietnamese": "Có lẽ tôi bị cảm.",
        "romanization": ""
    },
    {
        "id": 818,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "언제부터 아팠습니까?",
        "vietnamese": "Bạn đau từ khi nào?",
        "romanization": ""
    },
    {
        "id": 819,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "어제부터 아팠습니다.",
        "vietnamese": "Tôi đau từ hôm qua.",
        "romanization": ""
    },
    {
        "id": 820,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "지금 많이 아픕니다.",
        "vietnamese": "Bây giờ rất đau.",
        "romanization": ""
    },
    {
        "id": 821,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "어지럽습니다.",
        "vietnamese": "Tôi bị chóng mặt.",
        "romanization": ""
    },
    {
        "id": 822,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "속이 안 좋습니다.",
        "vietnamese": "Tôi thấy khó chịu trong bụng.",
        "romanization": ""
    },
    {
        "id": 823,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "토할 것 같습니다.",
        "vietnamese": "Tôi có cảm giác muốn nôn.",
        "romanization": ""
    },
    {
        "id": 824,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "알레르기가 있습니까?",
        "vietnamese": "Bạn có dị ứng không?",
        "romanization": ""
    },
    {
        "id": 825,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "아니요, 없습니다.",
        "vietnamese": "Không, tôi không có.",
        "romanization": ""
    },
    {
        "id": 826,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "약을 드리겠습니다.",
        "vietnamese": "Tôi sẽ cho bạn thuốc.",
        "romanization": ""
    },
    {
        "id": 827,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "하루에 세 번 드세요.",
        "vietnamese": "Uống ba lần một ngày.",
        "romanization": ""
    },
    {
        "id": 828,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "식후에 드세요.",
        "vietnamese": "Uống sau khi ăn.",
        "romanization": ""
    },
    {
        "id": 829,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "물과 함께 드세요.",
        "vietnamese": "Uống cùng nước.",
        "romanization": ""
    },
    {
        "id": 830,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "며칠 동안 드세요.",
        "vietnamese": "Uống trong vài ngày.",
        "romanization": ""
    },
    {
        "id": 831,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "주사를 맞아야 합니까?",
        "vietnamese": "Có cần tiêm không?",
        "romanization": ""
    },
    {
        "id": 832,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "네, 필요합니다.",
        "vietnamese": "Vâng, cần.",
        "romanization": ""
    },
    {
        "id": 833,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "조금 아플 수 있습니다.",
        "vietnamese": "Có thể hơi đau.",
        "romanization": ""
    },
    {
        "id": 834,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "괜찮습니다.",
        "vietnamese": "Không sao.",
        "romanization": ""
    },
    {
        "id": 835,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "검사를 하겠습니다.",
        "vietnamese": "Chúng tôi sẽ kiểm tra.",
        "romanization": ""
    },
    {
        "id": 836,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "입을 벌리세요.",
        "vietnamese": "Hãy mở miệng.",
        "romanization": ""
    },
    {
        "id": 837,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "숨을 깊이 쉬세요.",
        "vietnamese": "Hãy hít thở sâu.",
        "romanization": ""
    },
    {
        "id": 838,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "괜찮으십니까?",
        "vietnamese": "Bạn ổn chứ?",
        "romanization": ""
    },
    {
        "id": 839,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "네, 괜찮습니다.",
        "vietnamese": "Vâng, ổn.",
        "romanization": ""
    },
    {
        "id": 840,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "걱정하지 마세요.",
        "vietnamese": "Đừng lo.",
        "romanization": ""
    },
    {
        "id": 841,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "약국에 가세요.",
        "vietnamese": "Hãy đến nhà thuốc.",
        "romanization": ""
    },
    {
        "id": 842,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "이 처방전을 주세요.",
        "vietnamese": "Đưa đơn thuốc này.",
        "romanization": ""
    },
    {
        "id": 843,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "약국이 어디에 있습니까?",
        "vietnamese": "Nhà thuốc ở đâu?",
        "romanization": ""
    },
    {
        "id": 844,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "병원 옆에 있습니다.",
        "vietnamese": "Ở bên cạnh bệnh viện.",
        "romanization": ""
    },
    {
        "id": 845,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "이 약 주세요.",
        "vietnamese": "Cho tôi thuốc này.",
        "romanization": ""
    },
    {
        "id": 846,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "두통약 있습니까?",
        "vietnamese": "Có thuốc đau đầu không?",
        "romanization": ""
    },
    {
        "id": 847,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 848,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "감기약도 있습니까?",
        "vietnamese": "Có thuốc cảm không?",
        "romanization": ""
    },
    {
        "id": 849,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 850,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "얼마입니까?",
        "vietnamese": "Bao nhiêu tiền?",
        "romanization": ""
    },
    {
        "id": 851,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "10,000원입니다.",
        "vietnamese": "10.000 won.",
        "romanization": ""
    },
    {
        "id": 852,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "카드로 결제할 수 있습니까?",
        "vietnamese": "Có thể trả bằng thẻ không?",
        "romanization": ""
    },
    {
        "id": 853,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 854,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "현금으로 내겠습니다.",
        "vietnamese": "Tôi trả tiền mặt.",
        "romanization": ""
    },
    {
        "id": 855,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "영수증 주세요.",
        "vietnamese": "Cho tôi hóa đơn.",
        "romanization": ""
    },
    {
        "id": 856,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "여기 있습니다.",
        "vietnamese": "Đây ạ.",
        "romanization": ""
    },
    {
        "id": 857,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "약은 언제 먹어야 합니까?",
        "vietnamese": "Khi nào tôi uống thuốc?",
        "romanization": ""
    },
    {
        "id": 858,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "식후에 드세요.",
        "vietnamese": "Uống sau khi ăn.",
        "romanization": ""
    },
    {
        "id": 859,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "하루 세 번 드세요.",
        "vietnamese": "Uống ba lần mỗi ngày.",
        "romanization": ""
    },
    {
        "id": 860,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "물을 많이 드세요.",
        "vietnamese": "Hãy uống nhiều nước.",
        "romanization": ""
    },
    {
        "id": 861,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "충분히 쉬세요.",
        "vietnamese": "Hãy nghỉ ngơi đầy đủ.",
        "romanization": ""
    },
    {
        "id": 862,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "술은 마시지 마세요.",
        "vietnamese": "Đừng uống rượu.",
        "romanization": ""
    },
    {
        "id": 863,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "맵고 짠 음식은 피하세요.",
        "vietnamese": "Tránh đồ cay và mặn.",
        "romanization": ""
    },
    {
        "id": 864,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "며칠 후에 다시 오세요.",
        "vietnamese": "Hãy quay lại sau vài ngày.",
        "romanization": ""
    },
    {
        "id": 865,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "알겠습니다.",
        "vietnamese": "Tôi hiểu rồi.",
        "romanization": ""
    },
    {
        "id": 866,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 867,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "천만에요.",
        "vietnamese": "Không có gì.",
        "romanization": ""
    },
    {
        "id": 868,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "빨리 나으세요.",
        "vietnamese": "Chúc bạn mau khỏe.",
        "romanization": ""
    },
    {
        "id": 869,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "도와주셔서 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giúp.",
        "romanization": ""
    },
    {
        "id": 870,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "걱정하지 마세요.",
        "vietnamese": "Đừng lo.",
        "romanization": ""
    },
    {
        "id": 871,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "보험이 있습니까?",
        "vietnamese": "Bạn có bảo hiểm không?",
        "romanization": ""
    },
    {
        "id": 872,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 873,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "여권이 있습니까?",
        "vietnamese": "Bạn có hộ chiếu không?",
        "romanization": ""
    },
    {
        "id": 874,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 875,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "접수하세요.",
        "vietnamese": "Hãy làm thủ tục.",
        "romanization": ""
    },
    {
        "id": 876,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "이름이 무엇입니까?",
        "vietnamese": "Tên bạn là gì?",
        "romanization": ""
    },
    {
        "id": 877,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "여기에 적어 주세요.",
        "vietnamese": "Hãy viết vào đây.",
        "romanization": ""
    },
    {
        "id": 878,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "전화번호를 적어 주세요.",
        "vietnamese": "Hãy viết số điện thoại.",
        "romanization": ""
    },
    {
        "id": 879,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "기다려 주세요.",
        "vietnamese": "Hãy chờ một chút.",
        "romanization": ""
    },
    {
        "id": 880,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "곧 진료합니다.",
        "vietnamese": "Sắp được khám.",
        "romanization": ""
    },
    {
        "id": 881,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "지금 괜찮습니까?",
        "vietnamese": "Bây giờ bạn ổn chứ?",
        "romanization": ""
    },
    {
        "id": 882,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "네, 조금 나아졌습니다.",
        "vietnamese": "Vâng, tôi đỡ hơn rồi.",
        "romanization": ""
    },
    {
        "id": 883,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "약이 도움이 됩니다.",
        "vietnamese": "Thuốc có tác dụng.",
        "romanization": ""
    },
    {
        "id": 884,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 885,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "건강이 중요합니다.",
        "vietnamese": "Sức khỏe rất quan trọng.",
        "romanization": ""
    },
    {
        "id": 886,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "몸을 잘 돌보세요.",
        "vietnamese": "Hãy chăm sóc sức khỏe.",
        "romanization": ""
    },
    {
        "id": 887,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "무리하지 마세요.",
        "vietnamese": "Đừng làm việc quá sức.",
        "romanization": ""
    },
    {
        "id": 888,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 889,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "안녕히 가세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 890,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "다시 오겠습니다.",
        "vietnamese": "Tôi sẽ quay lại.",
        "romanization": ""
    },
    {
        "id": 891,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "정말 감사합니다.",
        "vietnamese": "Cảm ơn rất nhiều.",
        "romanization": ""
    },
    {
        "id": 892,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "친절해서 감사합니다.",
        "vietnamese": "Cảm ơn vì sự thân thiện.",
        "romanization": ""
    },
    {
        "id": 893,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "좋은 서비스입니다.",
        "vietnamese": "Dịch vụ tốt.",
        "romanization": ""
    },
    {
        "id": 894,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "많이 좋아졌습니다.",
        "vietnamese": "Tôi khỏe hơn nhiều.",
        "romanization": ""
    },
    {
        "id": 895,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "이제 괜찮습니다.",
        "vietnamese": "Bây giờ ổn rồi.",
        "romanization": ""
    },
    {
        "id": 896,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "여행을 계속할 수 있습니다.",
        "vietnamese": "Tôi có thể tiếp tục du lịch.",
        "romanization": ""
    },
    {
        "id": 897,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "정말 다행입니다.",
        "vietnamese": "Thật may mắn.",
        "romanization": ""
    },
    {
        "id": 898,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "건강하세요.",
        "vietnamese": "Chúc bạn khỏe mạnh.",
        "romanization": ""
    },
    {
        "id": 899,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 900,
        "topic": "tinh-huong-9",
        "level": "a1",
        "korean": "안녕히 계세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    },
    {
        "id": 901,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "편의점이 어디에 있습니까?",
        "vietnamese": "Cửa hàng tiện lợi ở đâu?",
        "romanization": ""
    },
    {
        "id": 902,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "이 근처에 편의점이 있습니까?",
        "vietnamese": "Gần đây có cửa hàng tiện lợi không?",
        "romanization": ""
    },
    {
        "id": 903,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 904,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "저쪽에 있습니다.",
        "vietnamese": "Ở phía kia.",
        "romanization": ""
    },
    {
        "id": 905,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "24시간 영업합니까?",
        "vietnamese": "Có mở 24 giờ không?",
        "romanization": ""
    },
    {
        "id": 906,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "네, 24시간 영업합니다.",
        "vietnamese": "Vâng, mở 24 giờ.",
        "romanization": ""
    },
    {
        "id": 907,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "물 한 병 주세요.",
        "vietnamese": "Cho tôi một chai nước.",
        "romanization": ""
    },
    {
        "id": 908,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "커피 있습니까?",
        "vietnamese": "Có cà phê không?",
        "romanization": ""
    },
    {
        "id": 909,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 910,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "이거 얼마입니까?",
        "vietnamese": "Cái này bao nhiêu tiền?",
        "romanization": ""
    },
    {
        "id": 911,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "2,000원입니다.",
        "vietnamese": "2.000 won.",
        "romanization": ""
    },
    {
        "id": 912,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "이거 주세요.",
        "vietnamese": "Cho tôi cái này.",
        "romanization": ""
    },
    {
        "id": 913,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "라면 있습니까?",
        "vietnamese": "Có mì ramen không?",
        "romanization": ""
    },
    {
        "id": 914,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 915,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "전자레인지 사용할 수 있습니까?",
        "vietnamese": "Có thể dùng lò vi sóng không?",
        "romanization": ""
    },
    {
        "id": 916,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 917,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "여기에서 먹어도 됩니까?",
        "vietnamese": "Tôi ăn ở đây được không?",
        "romanization": ""
    },
    {
        "id": 918,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 919,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "젓가락 주세요.",
        "vietnamese": "Cho tôi đũa.",
        "romanization": ""
    },
    {
        "id": 920,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "숟가락 주세요.",
        "vietnamese": "Cho tôi thìa.",
        "romanization": ""
    },
    {
        "id": 921,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "냅킨 주세요.",
        "vietnamese": "Cho tôi khăn giấy.",
        "romanization": ""
    },
    {
        "id": 922,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "봉투 주세요.",
        "vietnamese": "Cho tôi túi.",
        "romanization": ""
    },
    {
        "id": 923,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "쇼핑백 주세요.",
        "vietnamese": "Cho tôi túi mua sắm.",
        "romanization": ""
    },
    {
        "id": 924,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "카드로 계산할 수 있습니까?",
        "vietnamese": "Có thể trả bằng thẻ không?",
        "romanization": ""
    },
    {
        "id": 925,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 926,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "현금으로 내겠습니다.",
        "vietnamese": "Tôi trả tiền mặt.",
        "romanization": ""
    },
    {
        "id": 927,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "영수증 주세요.",
        "vietnamese": "Cho tôi hóa đơn.",
        "romanization": ""
    },
    {
        "id": 928,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "여기 영수증입니다.",
        "vietnamese": "Đây là hóa đơn.",
        "romanization": ""
    },
    {
        "id": 929,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "화장실이 있습니까?",
        "vietnamese": "Có nhà vệ sinh không?",
        "romanization": ""
    },
    {
        "id": 930,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 931,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "어디에 있습니까?",
        "vietnamese": "Ở đâu?",
        "romanization": ""
    },
    {
        "id": 932,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "뒤쪽에 있습니다.",
        "vietnamese": "Ở phía sau.",
        "romanization": ""
    },
    {
        "id": 933,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "충전기 있습니까?",
        "vietnamese": "Có sạc điện thoại không?",
        "romanization": ""
    },
    {
        "id": 934,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 935,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "휴대폰 충전하고 싶습니다.",
        "vietnamese": "Tôi muốn sạc điện thoại.",
        "romanization": ""
    },
    {
        "id": 936,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "가능합니다.",
        "vietnamese": "Được.",
        "romanization": ""
    },
    {
        "id": 937,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "맥주 있습니까?",
        "vietnamese": "Có bia không?",
        "romanization": ""
    },
    {
        "id": 938,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 939,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "얼마입니까?",
        "vietnamese": "Bao nhiêu tiền?",
        "romanization": ""
    },
    {
        "id": 940,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "4,000원입니다.",
        "vietnamese": "4.000 won.",
        "romanization": ""
    },
    {
        "id": 941,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "할인 있습니까?",
        "vietnamese": "Có giảm giá không?",
        "romanization": ""
    },
    {
        "id": 942,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "오늘 세일입니다.",
        "vietnamese": "Hôm nay đang giảm giá.",
        "romanization": ""
    },
    {
        "id": 943,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "도시락 있습니까?",
        "vietnamese": "Có cơm hộp không?",
        "romanization": ""
    },
    {
        "id": 944,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 945,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "이거 데워 주세요.",
        "vietnamese": "Hãy hâm nóng cái này.",
        "romanization": ""
    },
    {
        "id": 946,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "네, 알겠습니다.",
        "vietnamese": "Vâng, tôi hiểu rồi.",
        "romanization": ""
    },
    {
        "id": 947,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "여기에서 먹겠습니다.",
        "vietnamese": "Tôi sẽ ăn ở đây.",
        "romanization": ""
    },
    {
        "id": 948,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 949,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "천만에요.",
        "vietnamese": "Không có gì.",
        "romanization": ""
    },
    {
        "id": 950,
        "topic": "tinh-huong-10",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 951,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "관광 안내소가 어디에 있습니까?",
        "vietnamese": "Trung tâm thông tin du lịch ở đâu?",
        "romanization": ""
    },
    {
        "id": 952,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "이 근처에 관광지가 있습니까?",
        "vietnamese": "Gần đây có điểm tham quan không?",
        "romanization": ""
    },
    {
        "id": 953,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 954,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "어디가 유명합니까?",
        "vietnamese": "Nơi nào nổi tiếng?",
        "romanization": ""
    },
    {
        "id": 955,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "이 박물관이 유명합니다.",
        "vietnamese": "Bảo tàng này nổi tiếng.",
        "romanization": ""
    },
    {
        "id": 956,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "입장료가 얼마입니까?",
        "vietnamese": "Vé vào cửa bao nhiêu?",
        "romanization": ""
    },
    {
        "id": 957,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "10,000원입니다.",
        "vietnamese": "10.000 won.",
        "romanization": ""
    },
    {
        "id": 958,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "학생 할인 있습니까?",
        "vietnamese": "Có giảm giá cho sinh viên không?",
        "romanization": ""
    },
    {
        "id": 959,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 960,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "몇 시에 엽니까?",
        "vietnamese": "Mấy giờ mở cửa?",
        "romanization": ""
    },
    {
        "id": 961,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "아침 9시에 엽니다.",
        "vietnamese": "Mở cửa lúc 9 giờ sáng.",
        "romanization": ""
    },
    {
        "id": 962,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "몇 시에 닫습니까?",
        "vietnamese": "Mấy giờ đóng cửa?",
        "romanization": ""
    },
    {
        "id": 963,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "오후 6시에 닫습니다.",
        "vietnamese": "Đóng cửa lúc 6 giờ chiều.",
        "romanization": ""
    },
    {
        "id": 964,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "사진 찍어도 됩니까?",
        "vietnamese": "Có thể chụp ảnh không?",
        "romanization": ""
    },
    {
        "id": 965,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 966,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "플래시는 사용하지 마세요.",
        "vietnamese": "Đừng dùng đèn flash.",
        "romanization": ""
    },
    {
        "id": 967,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "화장실이 어디에 있습니까?",
        "vietnamese": "Nhà vệ sinh ở đâu?",
        "romanization": ""
    },
    {
        "id": 968,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "저쪽에 있습니다.",
        "vietnamese": "Ở phía kia.",
        "romanization": ""
    },
    {
        "id": 969,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "기념품 가게가 있습니까?",
        "vietnamese": "Có cửa hàng lưu niệm không?",
        "romanization": ""
    },
    {
        "id": 970,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "네, 있습니다.",
        "vietnamese": "Vâng, có.",
        "romanization": ""
    },
    {
        "id": 971,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "지도 있습니까?",
        "vietnamese": "Có bản đồ không?",
        "romanization": ""
    },
    {
        "id": 972,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "네, 여기 있습니다.",
        "vietnamese": "Vâng, đây ạ.",
        "romanization": ""
    },
    {
        "id": 973,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "추천 관광지가 있습니까?",
        "vietnamese": "Có điểm tham quan nào được giới thiệu không?",
        "romanization": ""
    },
    {
        "id": 974,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "이 공원이 아름답습니다.",
        "vietnamese": "Công viên này rất đẹp.",
        "romanization": ""
    },
    {
        "id": 975,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "걸어서 갈 수 있습니까?",
        "vietnamese": "Có thể đi bộ không?",
        "romanization": ""
    },
    {
        "id": 976,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 977,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "얼마나 걸립니까?",
        "vietnamese": "Mất bao lâu?",
        "romanization": ""
    },
    {
        "id": 978,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "10분 걸립니다.",
        "vietnamese": "Mất 10 phút.",
        "romanization": ""
    },
    {
        "id": 979,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "사진을 찍어 주시겠습니까?",
        "vietnamese": "Bạn chụp ảnh giúp tôi được không?",
        "romanization": ""
    },
    {
        "id": 980,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "네, 가능합니다.",
        "vietnamese": "Vâng, được.",
        "romanization": ""
    },
    {
        "id": 981,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 982,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "천만에요.",
        "vietnamese": "Không có gì.",
        "romanization": ""
    },
    {
        "id": 983,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "풍경이 정말 아름답습니다.",
        "vietnamese": "Phong cảnh thật đẹp.",
        "romanization": ""
    },
    {
        "id": 984,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "사람이 많습니다.",
        "vietnamese": "Có nhiều người.",
        "romanization": ""
    },
    {
        "id": 985,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "날씨가 좋습니다.",
        "vietnamese": "Thời tiết đẹp.",
        "romanization": ""
    },
    {
        "id": 986,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "여행이 즐겁습니다.",
        "vietnamese": "Chuyến du lịch rất vui.",
        "romanization": ""
    },
    {
        "id": 987,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "이곳이 마음에 듭니다.",
        "vietnamese": "Tôi thích nơi này.",
        "romanization": ""
    },
    {
        "id": 988,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "한국이 정말 아름답습니다.",
        "vietnamese": "Hàn Quốc thật đẹp.",
        "romanization": ""
    },
    {
        "id": 989,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "다시 오고 싶습니다.",
        "vietnamese": "Tôi muốn quay lại.",
        "romanization": ""
    },
    {
        "id": 990,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "좋은 경험입니다.",
        "vietnamese": "Đây là trải nghiệm tốt.",
        "romanization": ""
    },
    {
        "id": 991,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "기념사진을 찍겠습니다.",
        "vietnamese": "Tôi sẽ chụp ảnh kỷ niệm.",
        "romanization": ""
    },
    {
        "id": 992,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "이곳이 유명한 장소입니까?",
        "vietnamese": "Đây là địa điểm nổi tiếng à?",
        "romanization": ""
    },
    {
        "id": 993,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "네, 관광객이 많이 옵니다.",
        "vietnamese": "Vâng, nhiều khách du lịch đến.",
        "romanization": ""
    },
    {
        "id": 994,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "추천 감사합니다.",
        "vietnamese": "Cảm ơn vì đã giới thiệu.",
        "romanization": ""
    },
    {
        "id": 995,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "천만에요.",
        "vietnamese": "Không có gì.",
        "romanization": ""
    },
    {
        "id": 996,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "좋은 여행 되세요.",
        "vietnamese": "Chúc chuyến đi tốt đẹp.",
        "romanization": ""
    },
    {
        "id": 997,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "감사합니다.",
        "vietnamese": "Cảm ơn.",
        "romanization": ""
    },
    {
        "id": 998,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "또 방문하겠습니다.",
        "vietnamese": "Tôi sẽ quay lại.",
        "romanization": ""
    },
    {
        "id": 999,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "좋은 하루 보내세요.",
        "vietnamese": "Chúc một ngày tốt lành.",
        "romanization": ""
    },
    {
        "id": 1000,
        "topic": "tinh-huong-11",
        "level": "a1",
        "korean": "안녕히 계세요.",
        "vietnamese": "Tạm biệt.",
        "romanization": ""
    }
];

const topics = {
    "all": "Tất cả chủ đề",
    "tinh-huong-1": "Tình huống 1: NHẬP CẢNH SÂN BAY",
    "tinh-huong-3": "Tình huống 3: Đổi tiền – Mua SIM ở sân bay",
    "tinh-huong-4": "Tình huống 4: Hỏi đường – Đi taxi",
    "tinh-huong-5": "Tình huống 5: Check-in khách sạn",
    "tinh-huong-6": "Tình huống 6: Đi ăn ở nhà hàng",
    "tinh-huong-7": "Tình huống 7: Mua sắm",
    "tinh-huong-8": "Tình huống 8: Sử dụng phương tiện công cộng",
    "tinh-huong-9": "Tình huống 9: Đi bệnh viện / nhà thuốc",
    "tinh-huong-10": "Tình huống 10: Đi cửa hàng tiện lợi",
    "tinh-huong-11": "Tình huống 11: Đi tham quan / hỏi thông tin du lịch"
};

const levels = {
    "all": "Tất cả cấp độ",
    "a1": "Sơ cấp 1 (A1)",
    "a2": "Sơ cấp 2 (A2)",
    "b1": "Trung cấp 1 (B1)",
    "b2": "Trung cấp 2 (B2)"
};
