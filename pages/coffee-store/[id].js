import {useRouter} from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
    const router = useRouter()
    return<div>Coffee Store Page {router.query.id}
    <Link href={"/"}><a>Back to Home</a></Link>
    <Link href={"/coffee-store/dynamic"}><a>Go to Page Dynamic</a></Link>
    </div>
}

export default CoffeeStore;