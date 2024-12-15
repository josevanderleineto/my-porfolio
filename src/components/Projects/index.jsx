import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Slider from 'react-slick';

const Projects = () => {
    const { t } = useTranslation();

    // Configuração do Slider
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,  // Mostrar 2 cards por vez
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false,  // Remover centro mode para evitar sobreposição
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,  // No mobile, mostramos 1 card por vez
                settings: {
                    slidesToShow: 1,
                    centerMode: false,  // Desativando o centro no mobile
                }
            }
        ]
    };

    return (
        <Section id='projects'>
            <Title>{t('projects.title')}</Title>
            <StyledSlider {...settings}>
                {/* Card para o Projeto 1 */}
                <Card>
                    <Image src="/public/img/capa_autorretrato.webp" alt="Autorretrato Lab" />
                    <CardContent>
                        <CardTitle>{t('projects.projeto1.title')}</CardTitle>
                        <CardText>{t('projects.projeto1.description')}</CardText>
                        <ButtonGroup>
                            <Button href="https://www.eparreiautorretrato.com/" target="_blank" rel="noopener noreferrer">
                                {t('projects.viewSite')}
                            </Button>
                            <Button href="https://github.com/autoretaro/lab" target="_blank" rel="noopener noreferrer">
                                {t('projects.viewCode')}
                            </Button>
                        </ButtonGroup>
                    </CardContent>
                </Card>

                {/* Card para o Projeto 2 */}
                <Card>
                    <Image src="/public/img/capa_autorretrato.webp" alt="Autorretrato Lab" />
                    <CardContent>
                        <CardTitle>{t('projects.projeto2.title')}</CardTitle>
                        <CardText>{t('projects.projeto2.description')}</CardText>
                        <ButtonGroup>
                            <Button href="https://www.eparreiautorretrato.com/" target="_blank" rel="noopener noreferrer">
                                {t('projects.viewSite')}
                            </Button>
                            <Button href="https://github.com/autoretaro/lab" target="_blank" rel="noopener noreferrer">
                                {t('projects.viewCode')}
                            </Button>
                        </ButtonGroup>
                    </CardContent>
                </Card>

                {/* Adicione mais cards conforme necessário */}
            </StyledSlider>
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

const StyledSlider = styled(Slider)`
    /* Adicionando margem entre os cards */
    .slick-slide {
        padding: 0 15px; /* 15px de margem em cada lado */
    }

    /* Para melhorar a visualização, adicionar um espaço nos cards */
    .slick-list {
        padding: 0 10px; /* Ajustando o espaço das bordas laterais */
    }
`;

const Card = styled.div`
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    width: 100%; 
    height: auto;
    
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 240px;
    object-fit: cover;
    background-color: #f0f0f0;

    @media (max-width: 768px) {
        height: 180px;
        width: 400px;
    }
`;

const CardContent = styled.div`
    padding: 20px;
`;

const CardTitle = styled.h2`
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
`;

const CardText = styled.p`
    font-size: 0.8rem;
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
