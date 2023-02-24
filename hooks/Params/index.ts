import { useRouter } from "next/router";

const useParams = () => {
    const { query } = useRouter()
    return query
};

export default useParams;