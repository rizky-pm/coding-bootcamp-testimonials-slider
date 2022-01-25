const testimonials = [
    {
        review: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        name: 'Tanya Sinclair',
        job: 'UX Engineer',
        picture: './images/image-tanya.jpg',
    },
    {
        review: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',
        picture: './images/image-john.jpg',
    },
];

const profilePicture = $('.profile-picture');
const textReview = $('.text__review');
const textName = $('.text__name');
const textJob = $('.text__job');
const buttonPrev = $('.button__prev');
const buttonNext = $('.button__next');
let index = 0;
// ---------------------------------------------------------------
const injectData = (i) => {
    profilePicture.attr('src', testimonials[i].picture);
    textReview.text(testimonials[i].review);
    textName.text(testimonials[i].name);
    textJob.text(testimonials[i].job);
};

$(document).ready(function () {
    injectData(index);
});

buttonNext.click(function (e) {
    e.preventDefault();

    if (index === 0) {
        index = 1;
        injectData(index);
    } else {
        index = 0;
        injectData(index);
    }
});

buttonPrev.click((e) => {
    e.preventDefault();

    if (index === 1) {
        index = 0;
        injectData(index);
    } else {
        index = 1;
        injectData(index);
    }
});
