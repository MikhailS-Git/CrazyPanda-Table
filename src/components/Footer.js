import '../styles/Footer.styles.css';

export default function Footer(){
    return (
        <div className='footer'>
            By Mikhail Solovyev. {new Date().getFullYear()}
        </div>
    )
}