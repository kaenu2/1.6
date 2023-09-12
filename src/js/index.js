import '../scss/style.scss';
// Modals
// Site-bar
const burguerOpenBtnSelector = document.querySelector('.burger-icon');
const siteBarModalSelector = document.querySelector('.site-bar');
// Feedback
const feedbackBtnSelectors = document.querySelectorAll('.icon-chat');
const feedbackParentSelector = document.querySelector('.feedback');
// Call
const callBtnSelectors = document.querySelectorAll('.icon-call');
const callParentSelector = document.querySelector('.call-modal');

// Swipers
// Brands
const brandContentSelector = document.querySelector('.brands-swiper__wrapper');
const brandBtnSelector = document.querySelector('.brands-swiper__btn button');
// Technique
const techniqueContentSelector = document.querySelector('.technique-swiper__wrapper');
const techniqueBtnSelector = document.querySelector('.technique-swiper__btn button');
// Service
const serviceContentSelector = document.querySelector('.info-content__text-body');
const serviceBtnSelector = document.querySelector('.info-content__btn');

const settingsSlader = {
	direction: 'horizontal',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets'
	},
	breakpoints: {
		320: {
			enabled: true,
			spaceBetween: 16,
			slidesPerView: 1.25
			// slidesPerView: 1.18
		},
		375: {
			enabled: true,
			spaceBetween: 16,
			slidesPerView: 'auto'
		},
		768: {
			spaceBetween: 0,
			enabled: false
		}
	}
};

const openModal = (selector) => {
	selector.classList.add('active');
	document.body.classList.add('lock');
}
const closeModal = (event, selector, classNameBtn, classNameParent) => {
	if (event.target.classList.contains(classNameBtn) || event.target.classList.contains(classNameParent)) {
		selector.classList.remove('active');
		document.body.classList.remove('lock');
	}
}

const showAllContent = (btnSelector, contentSelector, content) => {
	btnSelector.classList.toggle('active');
	contentSelector.classList.toggle('active');

	if (!btnSelector.classList.contains('active')) {
		btnSelector.textContent = content[0];
	} else {
		btnSelector.textContent = content[1];
	}
}


feedbackBtnSelectors.forEach(elem => {
	elem.addEventListener('click', e => {
		openModal(feedbackParentSelector);
	});
});
feedbackParentSelector.addEventListener('click', e => {
	closeModal(e, feedbackParentSelector, 'feedback-close', 'feedback');
});

callBtnSelectors.forEach(elem => {
	elem.addEventListener('click', e => {
		openModal(callParentSelector);
	});
});
callParentSelector.addEventListener('click', e => {
	closeModal(e, callParentSelector, 'call-modal-close', 'call-modal');
});

burguerOpenBtnSelector.addEventListener('click', e => {
	openModal(siteBarModalSelector);
});
siteBarModalSelector.addEventListener('click', e => {
	closeModal(e, siteBarModalSelector, 'icon-burger-close', 'site-bar');
});


brandBtnSelector.addEventListener('click', e => {
	showAllContent(brandBtnSelector, brandContentSelector, ['Показать все', 'Скрыть']);
});

techniqueBtnSelector.addEventListener('click', e => {
	showAllContent(techniqueBtnSelector, techniqueContentSelector, ['Показать все', 'Скрыть']);
});

serviceBtnSelector.addEventListener('click', e => {
	showAllContent(serviceBtnSelector, serviceContentSelector, ['Читать далее', 'Скрыть']);
});


const swiper = new Swiper('.brands-swiper', settingsSlader);
const swiper2 = new Swiper('.technique-swiper', settingsSlader);

settingsSlader.breakpoints[320].slidesPerView = 1.15;

const swiper3 = new Swiper('.price-swiper', settingsSlader);
