import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Projects = () => {
    const { t } = useTranslation();

    return (
        <Section id='projects'>
            <Title>{t('projects.title')}</Title>
            <ProjectsGrid>
                {/* Card para o Projeto 1 */}
                <Card>
                    <Image src="/imgSkills/javascript.png" alt="Projeto 1" />
                    <CardContent>
                        <CardTitle>{t('projects.projeto1.title')}</CardTitle>
                        <CardText>{t('projects.projeto1.description')}</CardText>
                        <ButtonGroup>
                            <Button href="https://www.exemplo1.com" target="_blank" rel="noopener noreferrer">
                                {t('projects.viewSite')}
                            </Button>
                            <Button href="https://github.com/usuario/projeto1" target="_blank" rel="noopener noreferrer">
                                {t('projects.viewCode')}
                            </Button>
                        </ButtonGroup>
                    </CardContent>
                </Card>

                {/* Card para o Projeto 2 */}
                <Card>
                    <Image src="/vite.svg" alt="Projeto 2" />
                    <CardContent>
                        <CardTitle>{t('projects.projeto2.title')}</CardTitle>
                        <CardText>{t('projects.projeto2.description')}</CardText>
                        <ButtonGroup>
                            <Button href="https://www.exemplo2.com" target="_blank" rel="noopener noreferrer">
                                {t('projects.viewSite')}
                            </Button>
                            <Button href="https://github.com/usuario/projeto2" target="_blank" rel="noopener noreferrer">
                                {t('projects.viewCode')}
                            </Button>
                        </ButtonGroup>
                    </CardContent>
                </Card>
            </ProjectsGrid>
        </Section>
    );
};

const Section = styled.section`
    padding: 40px 20px;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 36px;
    margin-bottom: 40px;
    
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
`;

const Card = styled.div`
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const CardContent = styled.div`
    padding: 20px;
`;

const CardTitle = styled.h2`
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
`;

const CardText = styled.p`
    font-size: 16px;
    color: #555;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const Button = styled.a`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;


export default Projects;
