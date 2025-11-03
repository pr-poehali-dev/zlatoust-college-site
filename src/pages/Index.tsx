import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const specialties = [
    {
      title: 'Информационные системы и программирование',
      description: 'Разработка программного обеспечения, веб-приложений и мобильных приложений',
      icon: 'Code',
      duration: '3 года 10 месяцев',
      color: 'bg-gradient-to-br from-primary to-blue-600'
    },
    {
      title: 'Сетевое и системное администрирование',
      description: 'Настройка и обслуживание компьютерных сетей, серверов и систем',
      icon: 'Server',
      duration: '3 года 10 месяцев',
      color: 'bg-gradient-to-br from-secondary to-purple-600'
    },
    {
      title: 'Техническое обслуживание и ремонт автомобилей',
      description: 'Диагностика, ремонт и техническое обслуживание транспортных средств',
      icon: 'Car',
      duration: '3 года 10 месяцев',
      color: 'bg-gradient-to-br from-accent to-orange-600'
    },
    {
      title: 'Электромонтер по ремонту и обслуживанию',
      description: 'Монтаж, ремонт и обслуживание электрооборудования',
      icon: 'Zap',
      duration: '2 года 10 месяцев',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    },
    {
      title: 'Коммерция',
      description: 'Организация и управление торговыми операциями',
      icon: 'ShoppingBag',
      duration: '2 года 10 месяцев',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
    {
      title: 'Экономика и бухгалтерский учет',
      description: 'Ведение бухгалтерского учета, финансовый анализ',
      icon: 'Calculator',
      duration: '2 года 10 месяцев',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600'
    }
  ];

  const news = [
    {
      title: 'День открытых дверей 2025',
      date: '15 марта 2025',
      description: 'Приглашаем будущих абитуриентов и их родителей познакомиться с колледжем',
      category: 'Мероприятия'
    },
    {
      title: 'Студенты ЗТТИЭ заняли призовые места',
      date: '10 марта 2025',
      description: 'Наши студенты стали призерами регионального чемпионата WorldSkills',
      category: 'Достижения'
    },
    {
      title: 'Новое оборудование в лабораториях',
      date: '5 марта 2025',
      description: 'Колледж получил современное оборудование для практических занятий',
      category: 'Новости'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ЗТТИЭ</h1>
                <p className="text-xs text-muted-foreground">Златоустовский колледж</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О колледже</a>
              <a href="#specialties" className="text-sm font-medium hover:text-primary transition-colors">Специальности</a>
              <a href="#applicants" className="text-sm font-medium hover:text-primary transition-colors">Абитуриентам</a>
              <a href="#news" className="text-sm font-medium hover:text-primary transition-colors">Новости</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:inline-flex">Подать заявку</Button>
          </nav>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Образование будущего</Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Златоустовский технологический техникум
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Современное профессиональное образование для успешной карьеры. Более 70 лет готовим квалифицированных специалистов.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="UserPlus" className="mr-2" size={20} />
                  Поступить в колледж
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" className="mr-2" size={20} />
                  Виртуальный тур
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">70+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">1500+</div>
                  <div className="text-sm text-muted-foreground">студентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">95%</div>
                  <div className="text-sm text-muted-foreground">трудоустройство</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/22aa97a2-3b58-4792-b98f-3c15ea962df4/files/5abe83f2-f609-4893-a978-d212fac8f52c.jpg" 
                alt="Здание колледжа" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent to-orange-600 rounded-2xl opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary">О нас</Badge>
            <h2 className="text-4xl font-bold mb-4">Почему выбирают ЗТТИЭ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы предоставляем качественное образование и создаем условия для успешного старта карьеры
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <CardTitle>Качественное образование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Современные программы обучения, соответствующие требованиям работодателей и стандартам WorldSkills
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-secondary" size={32} />
                </div>
                <CardTitle>Опытные преподаватели</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Педагоги с большим практическим опытом работы в своей отрасли, готовые делиться знаниями
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Briefcase" className="text-accent" size={32} />
                </div>
                <CardTitle>Практика и стажировки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Партнерство с ведущими предприятиями города для прохождения практики и трудоустройства
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="specialties" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Специальности</Badge>
            <h2 className="text-4xl font-bold mb-4">Направления обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите специальность, которая откроет путь к успешной карьере
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
              >
                <div className={`h-2 ${specialty.color}`}></div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${specialty.color} rounded-xl flex items-center justify-center`}>
                      <Icon name={specialty.icon as any} className="text-white" size={28} />
                    </div>
                    <Badge variant="outline">{specialty.duration}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {specialty.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {specialty.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="applicants" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">Абитуриентам</Badge>
            <h2 className="text-4xl font-bold mb-4">Как поступить в колледж</h2>
          </div>
          <Tabs defaultValue="documents" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="documents">Документы</TabsTrigger>
              <TabsTrigger value="exams">Экзамены</TabsTrigger>
              <TabsTrigger value="dates">Сроки</TabsTrigger>
            </TabsList>
            <TabsContent value="documents" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Необходимые документы</CardTitle>
                  <CardDescription>Для поступления нужно подготовить следующие документы</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="FileText" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Заявление о приеме</p>
                      <p className="text-sm text-muted-foreground">Заполняется при подаче документов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="FileCheck" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Аттестат об образовании</p>
                      <p className="text-sm text-muted-foreground">Оригинал или копия</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="User" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Паспорт</p>
                      <p className="text-sm text-muted-foreground">Копия всех страниц</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Image" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Фотографии</p>
                      <p className="text-sm text-muted-foreground">6 фотографий 3x4</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="exams" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Вступительные испытания</CardTitle>
                  <CardDescription>Прием осуществляется на основе среднего балла аттестата</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Для большинства специальностей вступительные экзамены не требуются. Зачисление проводится по среднему баллу аттестата.
                  </p>
                  <p className="text-muted-foreground">
                    Для некоторых специальностей может потребоваться прохождение дополнительных испытаний (психологическое тестирование, медицинская комиссия).
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="dates" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Сроки приема документов</CardTitle>
                  <CardDescription>Важные даты приемной кампании 2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Calendar" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">20 июня - 15 августа</p>
                      <p className="text-sm text-muted-foreground">Прием документов (бюджет)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Calendar" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">17 августа</p>
                      <p className="text-sm text-muted-foreground">Публикация списков зачисленных</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Calendar" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">20 августа - 1 сентября</p>
                      <p className="text-sm text-muted-foreground">Прием документов (платное обучение)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Студентам и преподавателям</h2>
              <p className="text-lg mb-8 text-white/90">
                Все необходимые ресурсы для обучения и работы в одном месте
              </p>
              <div className="grid gap-4">
                <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon name="BookOpen" className="text-white" size={24} />
                      <CardTitle className="text-white">Расписание занятий</CardTitle>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon name="Library" className="text-white" size={24} />
                      <CardTitle className="text-white">Электронная библиотека</CardTitle>
                    </div>
                  </CardHeader>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" className="text-white" size={24} />
                      <CardTitle className="text-white">Внутренняя почта</CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/22aa97a2-3b58-4792-b98f-3c15ea962df4/files/c61a239e-f230-4cfe-beca-d0335813b6cd.jpg" 
                alt="Студенты" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Новости</Badge>
            <h2 className="text-4xl font-bold mb-4">Последние события</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">Мы всегда рады ответить на ваши вопросы</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Адрес</CardTitle>
                      <p className="text-muted-foreground">г. Златоуст, ул. Таганайская, 159</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Телефон</CardTitle>
                      <p className="text-muted-foreground">+7 (3513) 62-34-56</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-accent" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Email</CardTitle>
                      <p className="text-muted-foreground">info@zttie.ru</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg">ЗТТИЭ</h3>
              </div>
              <p className="text-sm text-white/70">
                Златоустовский технологический техникум инновационной экономики
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">О колледже</a></li>
                <li><a href="#specialties" className="hover:text-white transition-colors">Специальности</a></li>
                <li><a href="#applicants" className="hover:text-white transition-colors">Абитуриентам</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">Новости</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Студентам</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преподавателям</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2025 ЗТТИЭ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
