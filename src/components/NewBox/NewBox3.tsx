
const NewsBox3 = () => {
    return (
    <div className="w-full h-[300px] flex flex-row items-center gap-5 cursor-pointer border-b border-gray-500 hover:border-black p-1 group">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYv4sSxaRGGwc6CWyA3oBxrkpt_PzlzrHtg&s"
                alt="new"
                className="w-1/3 h-3/4 rounded-xl group-hover:scale-105 duration-200"
            />
            <div className="justify-center w-2/3 h-4/5 flex flex-col gap-3">
                <p className="line-clamp-3 text-lg font-bold group-hover:text-[#7dc642]">Báo mới mại z ga gá gá ga ga gasgwa s f fasf à à à à à aswwfwdef </p>

                <p className="line-clamp-2 ">
                    Dự kiến Diễn đàn hợp tác kinh tế châu Á - Thái Bình Dương ở Phú Quốc diễn ra vào tháng 11-2027, với sự tham gia 10.000-12.000 người là lãnh đạo cấp cao các nước, doanh nghiệp hàng đầu thế giới.</p>
            </div>
        </div>
    );
}

export default NewsBox3;