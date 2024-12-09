import { useTranslation } from 'react-i18next';
import styled from 'styled-components';



const Contacts = () => {
    const { t } = useTranslation();

    return (
        <ContactsContainer id='contacts'>
            <Title>{t('contactForm.title')}</Title>
            <Form>
                <Label htmlFor='name'>{t('contactForm.labelName')}</Label>
                <Input type='text' id='name' placeholder={t('contactForm.name')} />

                <Label htmlFor='email'>{t('contactForm.labelEmail')}</Label>
                <Input type='email' id='email' placeholder={t('contactForm.email')} />

                <Label htmlFor='subject'>{t('contactForm.labelSubject')}</Label>
                <Input type='text' id='subject' placeholder={t('contactForm.subject')} />

                <Label htmlFor='message'>{t('contactForm.labelMessage')}</Label>
                <TextArea id='message' placeholder={t('contactForm.message')} rows='4' />

                <Button type='submit'>{t('contactForm.send')}</Button>
            </Form>
        </ContactsContainer>
    );
}


const Title = styled.h2`
    text-align: center;`;

const ContactsContainer = styled.div`
    padding: 20px;
    background-color: var(--bg-secondary);
    border-radius: 8px;
    max-width: 600px;
    margin: 90px auto;  /* Mantém o contêiner centralizado com margem superior e inferior */
    display: flex;
    align-items: center;
    flex-direction: column;
`;


const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Label = styled.label`
    margin-bottom: 8px;
    font-weight: bold;
`;

const Input = styled.input`
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 5vh;
    
`;

const TextArea = styled.textarea`
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 12vh;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;


export default Contacts;