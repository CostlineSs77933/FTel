const access ={
    "objective_id": 2,
    "advanced_id": 1,
    "img": "/abc/fb.jpeg",
    "landing_page": "fb.com",
    "questions": [
        {
            "question_id": 1,
            "kieucauhoi": "select",
            "title": "Bạn đã từng ghé thăm địa danh nào?",
            "question_data": [
                {
                    "answer_id": 1,
                    "answer": "Vịnh Hạ Long"
                },
                {
                    "answer_id": 2,
                    "answer": "Nha Trang"
                },
                {
                    "answer_id": 3,
                    "answer": "Bình Định"
                },
                {
                    "answer_id": 4,
                    "answer": "Gia Lai"
                }
            ]
        },
        {
            "question_id": 3,
            "kieucauhoi": "fillin",
            "title": "Số điện thoại của bạn?",
            "kieutraloi": "so"
        }
    ]
}
fetch(access)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    });