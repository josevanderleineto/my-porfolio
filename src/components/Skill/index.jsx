import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Skill = () => {
    const { t } = useTranslation();

    // const skills = t('skills.items', { returnObjects: true });
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
                        {t('textHbilidades.text2')}
                    </TextSkill>
                </SkillsBox>
                <SkillsBox>
                    <TextSkill>
                        {t('textHbilidades.text3')}
                    </TextSkill>
                </SkillsBox>
                <SkillsBox>
                    <TextSkill>
                        {t('textHbilidades.text4')}
                    </TextSkill>
                </SkillsBox>
            </SkillsBoxContainer>
            <TechsTile>
                    {t('skills.tech')}
                </TechsTile>
            <TechContainer>
                <TechBox>
                    <TechImage src="/imgSkills/html.png" alt="HTML" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/css.png" alt="CSS" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/react.png" alt="React" />
                </TechBox>
                <TechBox>
                    <TechImage src="/imgSkills/javascript.png" alt="JavaScript" />
                </TechBox>

              
            </TechContainer>
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
    max-width: 240px;
    height: 120px;
    background-color: var(--bg-secondary);
    border-radius: 10px;
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

const TechContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 100%;
`;

const TechsTile = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;`

const TechBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    min-width: 90px;
    min-height: 90px;
    background-color: var(--bg-secondary);
    border-radius: 8px;
`;

const TechImage = styled.img`
    width: 25px;
`;


export default Skill;
