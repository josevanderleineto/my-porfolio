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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Lógica para enviar o formulário (submissão, API, etc.)
            console.log('Formulário enviado com sucesso!', formData);
        } else {
            console.log('Erro na validação do formulário');
        }
    };

    return (
        <ContactsContainer id='contacts'>
            <Title>{t('contactForm.title')}</Title>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor='name'>{t('contactForm.labelName')}</Label>
                <Input 
                    type='text' 
                    id='name' 
                    placeholder={t('contactForm.name')} 
                    value={formData.name} 
                    onChange={handleInputChange} 
                />
                {errors.name && <Error>{errors.name}</Error>}

                <Label htmlFor='email'>{t('contactForm.labelEmail')}</Label>
                <Input 
                    type='email' 
                    id='email' 
                    placeholder={t('contactForm.email')} 
                    value={formData.email} 
                    onChange={handleInputChange} 
                />
                {errors.email && <Error>{errors.email}</Error>}

                <Label htmlFor='subject'>{t('contactForm.labelSubject')}</Label>
                <Input 
                    type='text' 
                    id='subject' 
                    placeholder={t('contactForm.subject')} 
                    value={formData.subject} 
                    onChange={handleInputChange} 
                />
                {errors.subject && <Error>{errors.subject}</Error>}

                <Label htmlFor='message'>{t('contactForm.labelMessage')}</Label>
                <TextArea 
                    id='message' 
                    placeholder={t('contactForm.message')} 
                    rows='4' 
                    value={formData.message} 
                    onChange={handleInputChange} 
                />
                {errors.message && <Error>{errors.message}</Error>}

                <Button type='submit'>{t('contactForm.send')}</Button>
            </Form>
        </ContactsContainer>
    );
}

// Styled components (não alterados)
const Title = styled.h2`
    text-align: center;
`;

const ContactsContainer = styled.div`
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
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const Error = styled.span`
    color: red;
    font-size: 12px;
    margin-bottom: 8px;
`;

export default Contacts;
