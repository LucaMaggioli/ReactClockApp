export function getListElementsBindedBy(list, coefficient){
    let bindedList = [];
    let bindedElement:any;

    console.log("welcome in binding method");
    console.log(list)

    list.forEach((element)=>{
        console.log(element);
        console.log(list.indexOf(element));
        console.log(list.indexOf(element)+1)
        console.log(list.indexOf(element) + 1 )

        // bindedElement.push(element);
        bindedElement === undefined ? bindedElement = element: bindedElement += element;
        // bindedElement += element;
        if ((list.indexOf(element)+1 )% coefficient === 0){
            bindedList.push(bindedElement);
            console.log(bindedElement)
            bindedElement = [];
        }
    });
    if(bindedElement !== undefined){
        bindedList.push(bindedElement);
    }
    console.log(bindedList)


    return bindedList;
}
