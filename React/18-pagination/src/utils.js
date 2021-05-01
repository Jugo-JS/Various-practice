const paginate = (array) => {
    const usersPerPage = 10;
    const numberOfPages = array.length / usersPerPage;

    const newArray =  Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * usersPerPage;
        return array.slice(start, start + usersPerPage);
    })
    // console.log(newArray);
    return newArray;
}

export default paginate;
