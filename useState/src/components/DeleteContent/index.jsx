export function DeleteContent (props) {
    const {showContent} = props
    return (
        <div>
            {showContent && <h1>Your are brave🚀</h1>}
        </div>
    )
}