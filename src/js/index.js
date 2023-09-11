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
			slidesPerView: 1.15
		},
		375: {
			enabled: true,
			spaceBetween: 16,
			slidesPerView: 'auto'
		},
		768: {
			spaceBetween: 24,
			enabled: false
		},
		1120: {
			enabled: false,
			spaceBetween: 30
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

const showAllContent = (btnSelector, contentSelector) => {
	btnSelector.classList.toggle('active');
	contentSelector.classList.toggle('active');

	if (!btnSelector.classList.contains('active')) {
		btnSelector.textContent = 'Показать все';
	} else {
		btnSelector.textContent = 'Скрыть';
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
	showAllContent(brandBtnSelector, brandContentSelector);
});

techniqueBtnSelector.addEventListener('click', e => {
	showAllContent(techniqueBtnSelector, techniqueContentSelector);
});


const swiper = new Swiper('.brands-swiper', settingsSlader);
const swiper2 = new Swiper('.technique-swiper', settingsSlader);

const cloneObj = JSON.stringify(settingsSlader);
const settingsSlader2 = JSON.parse(cloneObj)

settingsSlader2.breakpoints[320].slidesPerView = 1.05;
settingsSlader2.breakpoints[768].spaceBetween = 0;
settingsSlader2.breakpoints[1120].spaceBetween = 0;

const swiper3 = new Swiper('.price-swiper', settingsSlader2);
