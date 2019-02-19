// JS goes here

class TabLink {

    constructor(element) {
        this.element= element;
         this.data= element.dataset.tab;
        console.log(this.data);
         this.elementItem = document.querySelector(`.tabs-item[data-tab='${element.dataset.tab}']`);
        //create new instances/objects with the right tab item attributes
        this.tabItem= new TabItem(this.elementItem);
        this.links = document.querySelectorAll('tabs-link');
        console.log(this.tabItem);
        element.addEventListener('click', () => this.select());

    };

    select() {
        const links = document.querySelectorAll('tabs-link');
        // const links = document.querySelectorAll('.tabs-link')
        //all links has tabs-link-selected removed from it 
        // Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));
        links.forEach(link => link.classList.remove('tabs-link-selected'));
        for (var i=0; i<links.length-1; i++) {
            if(links[i].background-color==='#609CB7') {
                links[i].background-color==='#ffffff';
            }
            else {
                links[i].background-color=='#ffffff';
            }
           }
        this.element.classList.add('tabs-link-selected');
        
        // this.element.style.backgroundColor="#609CB7";
        //this.tabItem= new TabItem(this.elementItem)(*corresponding/matching tabItem 
        //goes through the selection method Each parent construct deals with a seperate Main element in HTML)
        // links.forEach(link=> link.style.backgroundColor="white");
        this.tabItem.select();
    }

}

class TabItem {
    constructor(element){

        this.element= element;
    }

    select() {
        // const items = document.getElementsByClassName('tabs-item');
        const items= document.querySelectorAll('.tabs-item');
        console.log(items);
            //all tabs-item has class removed from it 
            items.forEach(item => item.classList.remove('tabs-item-selected'));
    // Array.from(items).forEach(item => item.classlist.remove('tabs-item-selected'));
           //variable passed through & binded to TabItem has the class added to it.  
        this.element.classList.add('tabs-item-selected');
    }

}

//makes the above true for every link created
const links =document.querySelectorAll('.tabs-link');
console.log(links);
links.forEach( element => new TabLink(element));



//navigation

const toggleMenu = () => {
 const navMenu = document.querySelector('.navMenu');
 console.log(navMenu);   
navMenu.classList.toggle('menu--open');
}




