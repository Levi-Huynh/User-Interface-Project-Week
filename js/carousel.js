class Carousel {
    constructor(carousel) {
      this.carousel= carousel;
      this.leftB = this.carousel.querySelector('.left-button');
      this.rightB = this.carousel.querySelector('.right-button');
      this.img = this.carousel.querySelectorAll('img');
      console.log(this.leftB);
      console.log(this.rightB);
      console.log(this.img);
      this.index=0;
      this.img[this.index].style.display='block';
      this.leftB.addEventListener("click", () => this.toggleLeft());
      this.rightB.addEventListener("click", () => this.toggleRight()); 
    }

toggleRight () {

    this.img[this.index].style.display="none";
    if(this.index=== this.img.length-1) {
        this.index=0;
    }
    else {
        this.index++
    }
    this.img[this.index].style.display="block";
}


toggleLeft() {
    this.img[this.index].style.display="none";
    if(this.index===0) {
        this.index= this.img.length-1
    }
else{
    this.index--
}
this.img[this.index].style.display="block";
}

}

const carousels= document.querySelectorAll(".carousel");
console.log(carousels);
carousels.forEach(carousel=> new Carousel(carousel));

//mini carousel

class miniCarousel {
    constructor(carousel) {
        this.carousel=carousel;
        this.leftB = this.carousel.querySelector('.miniLeft-button');
        this.rightB = this.carousel.querySelector('.miniRight-button');
        this.img = this.carousel.querySelectorAll('.carouselMImg');
        this.index=0;
        this.img[this.index].style.display="block";
        this.leftB.addEventListener("click", () => this.toggleLeft());
        this.rightB.addEventListener("click", () => this.toggleRight());
    }

toggleRight() {
    this.img[this.index].style.display="none";
    if(this.index=== this.img.length-1) {
        this.index=0;
    }
    else {
        this.index++
    }
    this.img[this.index].style.display="block";
}

toggleLeft() {
    this.img[this.index].style.display="none";
    if(this.index===0) {
        this.index= this.img.length-1
    }
    else{
        this.index--
    }
    this.img[this.index].style.display="block";
}

}

const miniCarousels = document.querySelectorAll('.miniCarousel');
console.log(miniCarousels);
miniCarousels.forEach(carousel => new miniCarousel(carousel));


