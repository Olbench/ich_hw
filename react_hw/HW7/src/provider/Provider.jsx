
// Создание контекста для управления языками
// Создайте контекст, который будет хранить текущий язык и функцию для его изменения.
// Используйте хук useState для управления состоянием текущего языка.
// Обеспечьте возможность доступа к текущему языку и функции изменения языка через провайдер.

import { useState } from "react"

function Provider() {
    const [language, setLanguge] = useState('')
    
    const languageSwitcher = () => {
    }
    return(<></>)
}

export default Provider