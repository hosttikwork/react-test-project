var my_news = [
	{
		author: 'Саша Печкин',
		text: 'В четчерг, четвертого числа...',
		bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
	},
	{
		author: 'Просто Вася',
		text: 'Считаю, что $ должен стоить 35 рублей!',
		bigText: 'А евро 42!БлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБла'
	},
	{
		author: 'Гость',
		text: 'Бесплатно. Скачать	',
		bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
	}
];

var my_video = [
	{
		url: 'https://mdbootstrap.com/images/video/Strum-Away.mp4',
		type: 'video/mp4'
	},
	{
		url: 'https://mdbootstrap.com/images/video/Beach-Ball.mp4',
		type: 'video/mp4'
	},
	{
		url: 'https://mdbootstrap.com/images/video/Nature-Sunset.mp4',
		type: 'video/mp4'
	}
];

var React = require('react');
var ReactDOM = require('react-dom');

var Article = React.createClass({
	getInitialState: function() {
		return {
			visible: false
		};
	},
	readmoreClick: function(e) {
		e.preventDefault();
		this.setState({visible: true});
	},
	render: function() {
		var author = this.props.data.author,
		bigText = this.props.data.bigText,
		visible = this.state.visible,
		text = this.props.data.text;
		return (
			<div className="article col-md-4">
				<div className="card">
					<div className="card-block">
						<h4 className="news__author card-title">{author}:</h4>
						<p className="news__text card-text">{text}</p>
						<a href="#" onClick={this.readmoreClick}   className={'btn btn-primary waves-effect waves-light news__readmore ' + (visible ? 'none': '')}>Подробнее</a>
						<p className={'news__big-text ' + (visible ? '': 'none')}>{bigText}</p>
					</div>
				</div>
			</div>
		)
	}
});

var News = React.createClass({
	getInitialState: function() {
		return {
			count: 0
		};
	},
	blockClick: function(e) {
		e.preventDefault();
		this.setState({count: ++this.state.count});
		console.log(this.state.count);
	},
	render: function() {
		var data = this.props.data,
			count = this.props.count;
		var newsTemplate = data.map(function(item, index) {
			return (
					<Article data={item} />
			)
		})
		return (
			data.length >0 ?
			<div className="news row" onClick={this.blockClick} >
				{newsTemplate}
			</div> : newsTemplate = <h4>К сожалению новостей нет</h4>
		);
	}
});

var VideoComponent = React.createClass({
	render: function() {
		var url = this.props.data.url,
		index = this.props.index;
		type = this.props.data.type;
		console.log(index);
		return (
			<div className={'carousel-item ' + (index == 0 ? 'active' : '')}>
				<video className="video-fluid" autoPlay loop>
					 <source src={url} type={type} />
				</video>
			</div>
		)
	}
});

var VideoBlock = React.createClass({
	render: function() {
		var data = this.props.data;
		var videoTemplate = data.map(function(item, index) {
			return (
					<VideoComponent data={item} index={index} />
			)
		})
		return (
			<div className="container" id="video">
				<div className="divider-new">
	            	<h2 className="h2-responsive wow fadeInDown">Видео</h2>
	        	</div>
	        	 <div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#video-carousel-example" data-slide-to="0" className=""></li>
                        <li data-target="#video-carousel-example" data-slide-to="1" className=""></li>
                        <li data-target="#video-carousel-example" data-slide-to="2" className="active"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                     {videoTemplate}
                    </div>

                    <a className="left carousel-control" href="#video-carousel-example" role="button" data-slide="prev">
                        <span className="icon-prev" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#video-carousel-example" role="button" data-slide="next">
                        <span className="icon-next" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
          
                </div>
			</div>
		);
	}
});

var About = React.createClass({
	render: function() {
		return (
			<div className="container" id="about">
				<div className="divider-new">
	            	<h2 className="h2-responsive wow fadeInDown">О нас</h2>
	        	</div>
	        	<p>Маркетолог спрашивает программиста: в чём сложность поддержки большого проекта?
				Программист: ну представь, что ты писатель и поддерживаешь проект “Война и мир”. У тебя ТЗ — написать главу как Наташа Ростова гуляла под дождём по парку. Ты пишешь “шёл дождь”, сохраняешь, вылетает сообщение об ошибке “Наташа Ростова умерла, продолжение невозможно”. Почему умерла? Начинаешь разбираться. Выясняется, что у Пьера Безухова скользкие туфли, он упал, его пистолет ударился о землю и выстрелил в столб, а пуля от столба срикошетила в Наташу. Что делать? Зарядить пистолет холостыми? Поменять туфли? Решили убрать столб. Получаем сообщение “Поручик Ржевский умер.” Выясняется, что он в следующей главе облокачивается о столб, которого уже нет...</p>
				<p>rol_foster: Сегодня полдня искали ошибку, из-за которой, образно говоря, у Наташи при прогулке с Пьером падают трусы. Одна из функций программы делает то, что делать не должна. Откатили на вчера - трусы на месте. Перелопатили весь код обновления, там вообще ни трусов, ни Наташи, ни даже Ржевского, тупо красят дом Болконских. Чуть ли не пошагово разбираем - все нормально. Но трусы падают. И, чтобы найти причину, придется перелопатить весь код, а это недели две минимум.
				В общем, начальник задумчиво посмотрел на девушку и волевым решением выдал Наташе подтяжки</p>
			</div>
		);
	}
});

var Footer = React.createClass({
	render: function() {
		return (
			<div className="container">
            <div className="row">

                <div className="col-md-6">
                    <h5 className="title">Footer Content</h5>
                    <p>Here you can use rows and columns here to organize your footer content.</p>
                </div>
               
                <div className="col-md-6">
                    <h5 className="title">Links</h5>
                    <ul>
                        <li><a href="#!">Линк</a></li>
                        <li><a href="#!">Линк</a></li>
                        <li><a href="#!">Линк</a></li>
                        <li><a href="#!">Линк</a></li>
                    </ul>
                </div>
            </div>
        </div>
		);
	}
});


var App = React.createClass({
	render: function() {
		return (
			<div className="app container">
				<div className="divider-new">
	            	<h2 className="h2-responsive wow fadeInDown">Новости</h2>
	        	</div>
				<hr className="extra-margins"></hr>
				<News data={my_news} />
				<About />
				<VideoBlock data={my_video} />
			</div>
		);
	}
});


ReactDOM.render(
<App />,
document.getElementById('root')
);
ReactDOM.render(
<Footer />,
document.getElementById('footer')
);