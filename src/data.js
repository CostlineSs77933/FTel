json = {
    "landing_page": "abc.com",
    "img": "abc.com/img.png", //#background-img
}

//2. Trang chỉ có 1 background và có các câu hỏi dạng khảo sát. Có thêm 1 nút để submi
json = {
    "landing_page": "abc.com",
    "img": "abc.com/img.png",//#background-img
    "questions": [
        {
            "question": "Câu hỏi 1",
            "answers": [
                "Phương án 1",
                "Phương án 2",
                "Phương án 3",

            ],
            "type": "select" //# cau hoi trac nghiem 1 phuong an
        },
        {
            "question": "Câu hỏi 2",
            "answers": [
                "Phương án 1",
                "Phương án 2",
                "Phương án 3",
                "Phương án 4",
                "Phương án 5",
            ],
            "type": "multi-select" //# cau hoi trac nghiem nhieu phuong an
        }
    ]
}
//3. Trang chỉ có 1 background và có các câu hỏi dạng thu nhập dữ liệu. Có thêm 1 nút để submit
json = {
    "landing_page": "abc.com",
    "img": "abc.com/img.png",//#background-img
    "questions": [
        {
            "question": "Câu hỏi 1",
            "type": "so" //# validate input in number format. Ex: 0123456789
            //#answer la input-text do người dùng nhập
        },
        {
            "question": "Câu hỏi 2",
            "type": "chu" //# validate input in string format. Ex: abcdedf
            //#answer la input-text do người dùng nhập
        }
    ]
}