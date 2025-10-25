import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Sparkles',
      title: 'Пластика кончика носа',
      description: 'Коррекция формы кончика носа',
      price: 'от 105 600 ₽'
    },
    {
      icon: 'Sparkles',
      title: 'Реконструкция носа',
      description: 'Восстановление формы и функции носа',
      price: 'от 142 500 ₽'
    },
    {
      icon: 'Sparkles',
      title: 'Риносептопластика',
      description: 'Коррекция носа и носовой перегородки',
      price: 'от 198 000 ₽'
    },
    {
      icon: 'Eye',
      title: 'Верхняя блефаропластика',
      description: 'Коррекция верхних век',
      price: 'от 100 000 ₽'
    },
    {
      icon: 'Eye',
      title: 'Нижняя блефаропластика',
      description: 'Коррекция нижних век',
      price: 'от 120 000 ₽'
    },
    {
      icon: 'Eye',
      title: 'Круговая блефаропластика',
      description: 'Коррекция верхних и нижних век',
      price: 'от 180 000 ₽'
    },
    {
      icon: 'Smile',
      title: 'Липофилинг контурных дефектов',
      description: 'Коррекция лица и тела собственным жиром',
      price: 'от 45 000 ₽'
    },
    {
      icon: 'Smile',
      title: 'Липофилинг средней зоны лица',
      description: 'Восполнение объема средней зоны лица',
      price: 'от 66 500 ₽'
    },
    {
      icon: 'Heart',
      title: 'Увеличение груди',
      description: 'Аугментационная маммопластика',
      price: 'от 250 000 ₽'
    },
    {
      icon: 'Heart',
      title: 'Уменьшение груди',
      description: 'Редукционная маммопластика',
      price: 'от 190 000 ₽'
    },
    {
      icon: 'Heart',
      title: 'Коррекция молочных желёз',
      description: 'Мастопексия и коррекция формы',
      price: 'от 160 000 ₽'
    },
    {
      icon: 'User',
      title: 'Абдоминопластика 1 категории',
      description: 'Подтяжка живота легкой степени',
      price: 'от 280 000 ₽'
    },
    {
      icon: 'User',
      title: 'Абдоминопластика 2 категории',
      description: 'Подтяжка живота средней степени',
      price: 'от 320 000 ₽'
    },
    {
      icon: 'User',
      title: 'Абдоминопластика 3 категории',
      description: 'Подтяжка живота сложной степени',
      price: 'от 360 000 ₽'
    },
    {
      icon: 'Zap',
      title: 'Боковая липосакция',
      description: 'Коррекция боковых зон тела',
      price: 'от 75 000 ₽'
    },
    {
      icon: 'Zap',
      title: 'Увеличение губ',
      description: 'Контурная пластика губ филлерами',
      price: 'от 25 000 ₽'
    }
  ];

  const doctors = [
    {
      name: 'Анна Петрова',
      specialty: 'Пластический хирург',
      experience: '15 лет опыта',
      image: 'https://cdn.poehali.dev/projects/c444004a-7d03-43c6-9dc6-6b3cf0176088/files/60e6dd05-39f4-40a6-8eb3-1e34a54f4eb5.jpg'
    },
    {
      name: 'Дмитрий Соколов',
      specialty: 'Пластический хирург',
      experience: '12 лет опыта',
      image: 'https://cdn.poehali.dev/projects/c444004a-7d03-43c6-9dc6-6b3cf0176088/files/bb549e0b-888e-4347-93e0-e33d8b05a168.jpg'
    },
    {
      name: 'Александр Новиков',
      specialty: 'Пластический хирург',
      experience: '8 лет опыта',
      image: 'https://cdn.poehali.dev/projects/c444004a-7d03-43c6-9dc6-6b3cf0176088/files/d706316a-df91-462b-bf8c-4d6a57ff1e46.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Мария С.',
      procedure: 'Ринопластика',
      text: 'Результат превзошёл все ожидания! Спасибо за профессионализм и внимательное отношение.',
      rating: 5
    },
    {
      name: 'Ольга К.',
      procedure: 'Блефаропластика',
      text: 'Очень довольна результатом. Взгляд стал более открытым и свежим. Рекомендую!',
      rating: 5
    },
    {
      name: 'Анна М.',
      procedure: 'Маммопластика',
      text: 'Благодарна клинике за внимательность на всех этапах. Чувствую себя увереннее!',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Activity" className="text-primary" size={28} />
              <span className="font-montserrat font-semibold text-xl">Афродита</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#doctors" className="text-foreground hover:text-primary transition-colors">Врачи</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">Записаться</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-medical-gray to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 leading-tight">
                Ваша красота в <span className="text-primary">надёжных руках</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Современная клиника пластической хирургии с 15-летним опытом. 
                Индивидуальный подход и новейшие технологии для достижения естественного результата.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на консультацию
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-bold text-3xl text-primary mb-1">2000+</div>
                  <div className="text-sm text-muted-foreground">Успешных операций</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-3xl text-primary mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-3xl text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных пациентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/c444004a-7d03-43c6-9dc6-6b3cf0176088/files/aaa3f3be-2060-4528-94b6-d22e04cf4654.jpg"
                alt="Операционная"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Лицензия Минздрава</div>
                    <div className="text-sm text-muted-foreground">Сертифицированная клиника</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-montserrat font-bold text-4xl mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Полный спектр услуг пластической хирургии и эстетической медицины
            </p>
            <Button size="lg" variant="outline" asChild>
              <a href="/price-list.html" download="Прайс-лист Афродита.html" className="inline-flex items-center">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать полный прайс-лист
              </a>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary text-lg">{service.price}</span>
                    <Button variant="ghost" size="sm">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 bg-medical-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl mb-4">Наши врачи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Команда профессионалов с многолетним опытом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-muted-foreground mb-4">{doctor.experience}</p>
                  <Button variant="outline" className="w-full">
                    Записаться к врачу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl mb-4">Портфолио работ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ: результаты до и после процедур
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/c444004a-7d03-43c6-9dc6-6b3cf0176088/files/35b36e4a-7a1e-43dd-b85f-d7c3c8ec2773.jpg"
                alt="До/После"
                className="w-full aspect-video object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Ринопластика</h3>
                <p className="text-muted-foreground">3 месяца после операции</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/c444004a-7d03-43c6-9dc6-6b3cf0176088/files/0898519a-2cea-4b62-b012-aa375f4f5346.jpg"
                alt="До/После"
                className="w-full aspect-video object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Абдоменопластика</h3>
                <p className="text-muted-foreground">6 месяцев после операции</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-medical-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl mb-4">Отзывы пациентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.procedure}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-4xl mb-4">Записаться на консультацию</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку и мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input 
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input 
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea 
                        placeholder="Расскажите, что вас интересует"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес клиники</h3>
                    <p className="text-muted-foreground">г. Краснодар, ул. Митрофана Седина, д. 4</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+12345678900</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">rapter888@yandex.ru</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-fit">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Activity" size={24} />
                <span className="font-montserrat font-semibold text-lg">Афродита</span>
              </div>
              <p className="text-white/70">
                Современная клиника пластической хирургии
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li>Ринопластика</li>
                <li>Блефаропластика</li>
                <li>Маммопластика</li>
                <li>Липофилинг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-white/70">
                <li>О клинике</li>
                <li>Врачи</li>
                <li>Лицензии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+12345678900</li>
                <li>rapter888@yandex.ru</li>
                <li>г. Краснодар, ул. Митрофана Седина, д. 4</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70 space-y-3">
            <p>© 2024 Афродита. Все права защищены.</p>
            <p className="text-sm text-white/50">Внимание! Данный сайт является частью проекта по экономике и выполняется в качестве домашнего задания</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;