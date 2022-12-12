
export default function WelcomeMessage() {
    const message = localStorage.getItem('CTM_WelcomeMessage')
    return (
        <p>{message}</p>
             
    )
}