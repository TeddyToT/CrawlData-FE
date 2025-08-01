
const NewsBox2 = () => {
    return (
    <div className="w-full h-[400px] flex flex-col items-center gap-5 cursor-pointer border-b border-gray-500 hover:border-black group">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYv4sSxaRGGwc6CWyA3oBxrkpt_PzlzrHtg&s"
                alt="new"
                className=" w-full h-1/2 rounded-xl group-hover:scale-105 duration-200"
            />
            <div className="w-full flex flex-col gap-3">
                <p className="line-clamp-2 text-lg font-bold pb-2 group-hover:text-[#7dc642]">Báo mới mại zô mại zô hú hú hú hu hú hu hú hú</p>
                <p className="line-clamp-3 ">
                    Dự kiến Diễn đàn hợp tác kinh tế châu Á - Thái Bình Dương ở Phú Quốc diễn ra vào tháng 11-2027, với sự tham gia 10.000-12.000 người là lãnh đạo cấp cao các nước, doanh nghiệp hàng đầu thế giới.
                    </p>
            </div>
        </div>
    );
}

export default NewsBox2;