export const filteredEmojis = ({emojisData, searchText='', itemPerPage = 20}) => {
    
    const resFilter = emojisData.filter((emoji, index, arr) => {
        if(emoji.title.toLowerCase().includes(searchText.toLowerCase())){
            return emoji;
        }
        if(emoji.keywords.toLowerCase().includes(searchText.toLowerCase())){
            return emoji;
        }

        return false
    })

    // return resFilter.slice(0, itemPerPage);
    return resFilter;
}