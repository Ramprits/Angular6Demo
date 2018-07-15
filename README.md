# This is my besic to advance angular practices:

1 chapter Data and component 

Databinding
@Input decorator and @Output Decorator added.


# @ViewEncaptulation =>
1: encapsulation: ViewEncapsulation.None
2: encapsulation: ViewEncapsulation.Native
3: encapsulation: ViewEncapsulation.Emulated  default is Emulated

Create LocalReference on html element
<input type="text" #name ></input>
So #name is local reference on element.
You can pass value by local reference 

onAdded(name: HTMLInputElement){
console.log(name.value)
}


# Getting Access to the Template & DOM with @ViewChild

@ViewChild("newVCServerContent") newVCServerContent: ElementRef;



