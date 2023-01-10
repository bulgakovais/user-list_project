import { Header, UserDescription, UserHeaderText } from "../components"


/** 
    * Компонент страницы отдельного пользователя
    * Включает в себя компонент Header и передает в него два параметра:
    * @param {boolean} isTwoBtn - наличие/отсутствие двух кнопок в заголовке страницы
    * @param {object} UserDescription - текстовый компонент заголовка UserPage
    */
export const UserPage = () => {

    return (<>
        <Header isTwoBtn={true}>
            <UserHeaderText />
        </Header>
        <UserDescription />
    </>
    )
}