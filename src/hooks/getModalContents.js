import contentData from '../data/contentData';

export const getModalContents = (id) => {
    const modalContent = contentData.filter((x) => {
        return (x.id === id)
    })
    return modalContent;
    console.log(modalContent)
}

// export default getModalContents