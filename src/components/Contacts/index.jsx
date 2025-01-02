import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Contacts = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); // Novo estado para controle de envio

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = t('contactForm.errorName');
        if (!formData.email) newErrors.email = t('contactForm.errorEmail');
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('contactForm.errorEmailFormat');
        if (!formData.subject) newErrors.subject = t('contactForm.errorSubject');
        if (!formData.message) newErrors.message = t('contactForm.errorMessage');
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true); // Inicia o processo de envio

            try {
                const response = await fetch('https://form-api-nine.vercel.app/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const result = await response.json();
                
                if (response.ok) {
                    console.log('Formulário enviado com sucesso!', result);
                    alert(t('contactForm.successMessage'));
                    setFormData({ name: '', email: '', subject: '', message: '' }); // Limpa o formulário
                } else {
                    console.log('Erro ao enviar o formulário', result);
                    alert(t('contactForm.errorMessageGeneral'));
                }
            } catch (error) {
                console.error('Erro na comunicação com a API', error);
                alert(t('contactForm.errorMessageGeneral'));
            } finally {
                setIsSubmitting(false); // Finaliza o processo de envio
            }
        } else {
            console.log('Erro na validação do formulário');
        }
    };

    return (
        <ContactsContainer id='contacts'>
            <Title>{t('contactForm.title')}</Title> {/* Título do formulário */}
            <Form onSubmit={handleSubmit}>
                <Label htmlFor='name'>{t('contactForm.labelName')}</Label>
                <Input 
                    type='text' 
                    id='name' 
                    placeholder={t('contactForm.placeholderName')} 
                    value={formData.name} 
                    onChange={handleInputChange} 
                />
                {errors.name && <Error>{errors.name}</Error>}

                <Label htmlFor='email'>{t('contactForm.labelEmail')}</Label>
                <Input 
                    type='email' 
                    id='email' 
                    placeholder={t('contactForm.placeholderEmail')} 
                    value={formData.email} 
                    onChange={handleInputChange} 
                />
                {errors.email && <Error>{errors.email}</Error>}

                <Label htmlFor='subject'>{t('contactForm.labelSubject')}</Label>
                <Input 
                    type='text' 
                    id='subject' 
                    placeholder={t('contactForm.placeholderSubject')} 
                    value={formData.subject} 
                    onChange={handleInputChange} 
                />
                {errors.subject && <Error>{errors.subject}</Error>}

                <Label htmlFor='message'>{t('contactForm.labelMessage')}</Label>
                <TextArea 
                    id='message' 
                    placeholder={t('contactForm.placeholderMessage')} 
                    rows='4' 
                    value={formData.message} 
                    onChange={handleInputChange} 
                />
                {errors.message && <Error>{errors.message}</Error>}

                <Button type='submit' disabled={isSubmitting}>
                    {isSubmitting ? t('contactForm.sending') : t('contactForm.send')} {/* Tradução do botão */}
                </Button>
            </Form>
        </ContactsContainer>
    );
}

// Styled components (não alterados)
const Title = styled.h2`
    text-align: center;
`;

const ContactsContainer = styled.section`
    padding: 20px;
    background-color: var(--bg-secondary);
    border-radius: 8px;
    max-width: 600px;
    margin: 90px auto;
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
    background-color: #7FFFD4;
    color: var(--bg-secondary);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    
    &:hover {
        background-color:rgb(136, 243, 208);
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const Error = styled.span`
    color: red;
    font-size: 12px;
    margin-bottom: 8px;
`;

export default Contacts;
