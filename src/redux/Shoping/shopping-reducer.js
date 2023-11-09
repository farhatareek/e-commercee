import * as actionTypes from './shopping-types'

const INITIAL_STATE ={
    products:[
        {
            id:1,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/1de83aa7-9014-4990-9b10-dddfec4ac502.jpg",
            title:'Burger',
            price:123,
        },
        {
            id:2,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/01653811-07a5-49f4-aabe-da0da4e2b98f.jpg",
            title:'Sushi',
            price:123,
        },
        {
            id:3,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b7ffca98-471f-412f-90fd-aa177d101a96.jpg",
            title:'Steak',
            price:123,
        },
        {
            id:4,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/829ccdcb-f672-4665-bc50-a8b25eb9e430.jpg",
            title:'Shawerma',
            price:123,
        },
        {
            id:5,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/f419fb5a-7d99-43a2-bd8d-a21655f0e3be.jpg",
            title:'Oreantial',
            price:123,
        },
        {
            id:6,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e9dabcf9-5da7-40f2-8535-b356af1c79d4.jpg",
            title:'Flafel Oreantial ',
            price:123,
        },
        {
            id:7,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/94e51fa5-b3e6-463f-a8d7-56c16c267bfe.jpg",
            title:'Sandwitches',
            price:123,
        },
        {
            id:8,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/c9b004f4-4a92-4856-b113-53df8101c651.jpg",
            title:'Fater',
            price:123,
        },
        {
            id:9,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/cabaec3b-0aa8-4e10-a63e-58510de8b32c.jpg",
            title:'Breakfast',
            price:123,
        },
    
        {
            id:10,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/4b4b5933-f69c-4302-82df-6be5760a18e0.jpg",
            title:'Latte',
            price:123,
        },
        {
            id:11,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6fed418-a5ca-43de-882c-d79eb949fc8a.jpg",
            title:'Turkish coffe',
            price:123,
        },
        {
            id:12,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/1ebfd4e8-050c-4b13-8b5d-a6ba661440fb.jpg",
            title:'Waffell',
            price:123,
        },
        {
            id:13,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/091ae2e2-97a5-46e2-92b2-24e5bf5b2662.jpg",
            title:'Kofta',
            price:123,
        },
        {
            id:14,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/10db202e-75a4-48ba-939e-466fb1e3cdc8.jpg",
            title:'Griled chekin',
            price:123,
        },
        {
            id:15,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b0f199fa-d147-4c05-9dbb-1365c11aa30b.jpg",
            title:'Salad',
            price:123,
        },
        {
            id:16,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/cacd0dcb-a16e-46e6-a76c-3cdd3d5016f3.jpg",
            title:'Salad',
            price:123,
        },
        {
            id:17,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3e43f145-69c5-4da7-a15f-c635876512de.jpg",
            title:'Salad',
            price:123,
        },
        {
            id:18,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/a8dd4724-a365-4a57-9735-8aae02f168b1.jpg",
            title:'Taco Salad',
            price:123,
        },
        {
            id:19,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/aa75bad8-480a-43b7-b03c-26519581b00c.jpg",
            title:'Pizza',
            price:123,
        },
    
        {
            id:20,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0eee0cb1-ddf9-48f1-9876-2824c3c2a194.jpg",
            title:'Pizza',
            price:123,
        },
        {
            id:21,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/f594f3ed-1cbc-424d-8804-3e8fea8c5a43.jpg",
            title:'Pizza',
            price:123,
        },
        {
            id:22,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/0eee0cb1-ddf9-48f1-9876-2824c3c2a194.jpg",
            title:'pizza',
            price:123,
        },
        {
            id:23,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b20d7106-bf5c-4e3f-8873-16ecbd07b807.jpg",
            title:'Pizza',
            price:123,
        },
        {
            id:24,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/38972e25-e05c-48d2-8ac2-177666e04cf6.jpg",
            title:'Desserts',
            price:123,
        },
        {
            id:25,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/df9a3cb5-c892-486f-aac3-119dcd7ad128.jpg",
            title:'Desserts',
            price:123,
        },
        {
            id:26,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/89b24acb-80cd-40b4-aa03-e762acf58280.jpg",
            title:'Pasta',
            price:123,
        },
        {
            id:27,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3f5ca3be-9ccf-419e-914b-6d3ab809e989.jpg",
            title:'Pasta',
            price:123,
        },
        {
            id:28,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/538b4ca1-1df1-4ebc-82e2-1a4a4315c0bd.jpg",
            title:'Pasta',
            price:123,
        },
        {
            id:29,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/cd979a8d-e545-451a-95da-1325a9604461.jpg",
            title:'Pasta',
            price:123,
        },
    
        {
            id:30,
            image:"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/3a839a2f-ddd5-4df8-97cd-2aad36c8ec42.jpg",
            title:'Pasta',
            price:123,
        },
        
    ],
    cart:[],
    currentItem:null,
}

const shopReducer = (state= INITIAL_STATE ,action) => {
switch(action.type){
    case actionTypes.ADD_TO_CART:

    const item = state.products.find(prod => prod.id === action.payload.id)
   
    const inCart = state.cart.find((item) => 
    item.id === action.payload.id ? true : false );
        return{
        ...state, 
        cart: inCart
            ? state.cart.map((item) =>
            item.id === action.payload.id 
            ? {...item, qty: item.qty + 1}
            : item
            )
            :[...state.cart, {...item,qty: 1}],
        }
        
        // remove 
    case actionTypes.REMOVE_FROM_CART:
        return{
            ...state,
            cart:state.cart.filter(item => item.id !== action.payload.id),
        }
        // 
    case actionTypes.ADJUST_QTY:
        return{
        ...state,
        cart:state.cart.map((item )=>
        item.id === action.payload.id 
        ? {...item, qty: +action.payload.qty}
        : item)
        }    
        //
    case actionTypes.LOAD_CURRENT_ITEM:
        return{
            ...state,
            currentItem: action.payload,
        }    
    default:
        return state;    
}
}

export default shopReducer