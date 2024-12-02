import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Skill = () => {
    const { t } = useTranslation();

    const skills = t('skills.items', { returnObjects: true });
    // const experience = t('experience.text');
    // const education = t('education.text');

    return (
        <Section id='skills'>
            <Title>{t('skills.title')}</Title>
            <SkillsBoxContainer>
                <SkillsBox>
                    <TextSkill>
                        {t('textHbilidades.text1')}
                    </TextSkill>
                </SkillsBox>
                <SkillsBox>
                    <TextSkill>
                        {t('textHbilidades.text1')}
                    </TextSkill>
                </SkillsBox>
                <SkillsBox>
                    <TextSkill>
                        {t('textHbilidades.text1')}
                    </TextSkill>
                </SkillsBox>
                <SkillsBox>
                    <TextSkill>
                        {t('textHbilidades.text1')}
                    </TextSkill>
                </SkillsBox>
            </SkillsBoxContainer>
            <SkillsContainer>
                {skills && skills.length > 0 ? (
                    skills.map((skill, index) => (
                        <SkillItem key={index}>{skill.text}</SkillItem>
                    ))
                ) : (
                    <Paragraph>No skills found.</Paragraph>
                )}
            </SkillsContainer>
{/* 
            <SubTitle>{t('experience.title')}</SubTitle>
            <Paragraph>{experience}</Paragraph>

            <SubTitle>{t('education.title')}</SubTitle>
            <Paragraph>{education}</Paragraph> */}
        </Section>
    );
};

const Title = styled.h1`
    font-size: 32px;
    margin-top: 40px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

// const SubTitle = styled.h2`
//     font-size: 28px;
//     margin-top: 40px;
//     margin-bottom: 20px;
// `;

const Section = styled.section`
    padding: 40px;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

const SkillsBoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
`;

const SkillsBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text);
    margin-bottom: 20px;
    width: 290px;
    height: 150px;
    background-color: black;
`;

const TextSkill = styled.p`
    font-size: 1rem;
    margin: 25px;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }

    @media (max-width: 280px) {
        font-size: 0.4rem;
    }
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
`;

const SkillItem = styled.div`
    font-size: 1rem;
    color: var(--color-text);
    background-color: black;
    margin: 10px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid var(--color-border);
    border-radius: 5px;
    box-sizing: border-box;

    @media (max-width: 200px) {
        width: 80px;
        height: 80px;
    }

    @media (max-width: 480px) {
        width: 60px;
        height: 60px;
    }
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    color: var(--color-text);
    margin: 20px auto;
`;

export default Skill;
