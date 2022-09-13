export function TaskList ({list, listModifier}) {

    const modifiedList = listModifier(list)

    useEffect(() => {
        console.log('CRIOU A FUNÇÃO DO ZERO')
    }, [listModifier])

    return (
        <ul>
            {modifiedList.map((item) => {
                <li key={item}>{item}</li>
            })}
        </ul>
    )
}