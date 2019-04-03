import React from 'react';
import Particles from 'react-particles-js';

const Main = () => (
    <>
        <section className='banner'>
            <Particles className='particles' />
            <h1 className='title'>
                BotVK для автоматизации сообществ «ВКонтакте»
            </h1>
            <p className='caption'>
                Общение с клиентами и реклама товаров, отправка рассылок и выгодных предложений в пару кликов. Экономьте свое время для грамотного развития бизнеса вместе с BotVK.
            </p>
            <a href='#!' className='btn btn--primary btn--secondary'>
                Создать бота
            </a>
        </section>
        <section className='about'>
            <h2 className='title'>
                Как это работает?
            </h2>
            <div className='grid'>
                <div className='grid__item'>
                    <div className='image'>
                        <img src='https://bit.ly/2YLtmpx' alt='icon' />
                    </div>
                    <h6 className='title'>
                        Установка
                    </h6>
                    <p className='caption'>
                        Бесплатно устанавливаете бота в сообщество ВКонтакте
                    </p>
                </div>
                <div className='grid__item'>
                    <div className='image'>
                        <img src='https://bit.ly/2K1cpUx' alt='icon' />
                    </div>
                    <h6 className='title'>
                        Привлечение
                    </h6>
                    <p className='caption'>
                        Рассказываете о появлении анонимного чата / бота своей аудитории
                    </p>
                </div>
                <div className='grid__item'>
                    <div className='image'>
                        <img src='https://bit.ly/2uGdOWd' alt='icon' />
                    </div>
                    <h6 className='title'>
                        Доход
                    </h6>
                    <p className='caption'>
                        Зарабатываете на всех покупах VIP подписок у вашего бота
                    </p>
                </div>
                <div className='grid__item'>
                    <div className='image'>
                        <img src='https://bit.ly/2I5nnGa' alt='icon' />
                    </div>
                    <h6 className='title'>
                        Вывод
                    </h6>
                    <p className='caption'>
                        Выводите полученные деньги на кошелек Яндекс.Денег или банковскую карту
                    </p>
                </div>
            </div>
        </section>
        <section className='info'>
            <h6 className='title'>
                Кому и для чего понадобится сервис?
            </h6>
            <p className='paragraph'>
                Это сервис для создания ботов и текстовых рассылок от имени групп и сообществ «ВКонтакте». Общение с клиентами и реклама товаров, отправка рассылок и выгодных предложений теперь будут занимать минимум времени.
            </p>
            <p className='paragraph'>
                Для полной автоматизации управления и сбора статистики. При помощи бота или рассылки вы сможете развлекать читателей, формировать репутацию личного бренда.
            </p>
            <p className='paragraph'>
                При помощи гибкой системы настроек вы сможете создать бота со специальными функциями или рассылку с уникальным контентом для решения любых задач.
            </p>
            <a href='#!' className='btn btn--primary btn--secondary'>
                Зарегистрироваться
            </a>
        </section>
        <section className='more'>
            <h6 className='title'>
                На чем я буду зарабатывать?
            </h6>
            <div className='grid'>
                <div className='grid__item'>
                    <div className='overlay'>
                        <span>1</span>
                    </div>
                    <p>
                        Пользователи общаются в бесплатном анонимном чате.
                    </p>
                    <br />
                    <p>
                        Желающие получить расширенные возможности в чате покупают VIP подписку за реальные деньги.
                    </p>
                </div>
                <div className='grid__item'>
                    <div className='overlay'>
                        <span>2</span>
                    </div>
                    <p>
                        Пользователи общаются в бесплатном анонимном чате.
                    </p>
                    <br />
                    <p>
                        Вы получаете доход с каждой продажи подписки в боте.
                    </p>
                </div>
                <div className='grid__item'>
                    <div className='overlay'>
                        <span>3</span>
                    </div>
                    <p>
                        Вы получаете доход с каждой продажи подписки в боте.
                    </p>
                    <br />
                    <p>
                        Желающие получить расширенные возможности в чате покупают VIP подписку.
                    </p>
                </div>
            </div>
        </section>
        <footer>
            <p className='caption'>
                © Богдан Викторов, 2016-2018
            </p>
            <p className='caption'>
                Все материалы данного сайта являются объектами авторского права (в том числе дизайн). Запрещается копирование, распространение (в том числе путем копирования на другие сайты и ресурсы в Интернете) или любое иное использование информации и объектов без предварительного согласия с правообладателями.
            </p>
            <div id="vk_groups"></div>
        </footer>
    </>
)

export default Main;