import {useRouter} from "next/router";
import Link from "next/link";

import coffeeStoresData from "../../data/coffee-stores.json"

export function getStaticProps(staticProps){
    const params = staticProps.params
    return {
    props:{
        coffeeStore: coffeeStoresData.find(store => {
            return store.id == params.id
        })
    }
    }
}

export function  getStaticPaths(){
    return {
        paths: [
            {params: {id:"0"}},
            {params: {id:"1"}},
        ],
        fallback: false,
    }
}


const CoffeeStore = (props) => {
    const router = useRouter()
    return<div>Coffee Store Page {router.query.id}
    <Link href={"/"}><a>Back to Home</a></Link>
    <Link href={"/coffee-store/dynamic"}><a>Go to Page Dynamic</a></Link>
        <p>{props.coffeeStore.name}</p>
        <p>{props.coffeeStore.address}</p>
        <p>{props.coffeeStore.neighbourhood}</p>
        <p>{props.coffeeStore.websiteUrl}</p>
    </div>
}

export default CoffeeStore;