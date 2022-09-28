// HOC: Higher Order Components
//  Là 1 component trả về 1 component mới

import { useNavigate, useParams, useSearchParams } from "react-router-dom"

export const withRoute = (Component) => {
    return (props) => {
        // Chuyển trang
        const navigate = useNavigate()

        // Query URL
        const [searchParams] = useSearchParams()

        // get Param
        const params = useParams()

        return <Component params={params} searchParams={searchParams} navigate={navigate} />
    }
}