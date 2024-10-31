const customAPIFetcher = async <T>(url :string , options?: RequestInit) : Promise<T> =>{
    try {
        if(!url){
            throw new Error("Error : No provided url")
        }
        const response = await fetch(url , options)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        } else {
            throw new Error("Error: Response is not in JSON format");
        }
    } catch (error) {
        throw new Error(`Error while fetching data: ${error instanceof Error ? error.message : error}`);
    }
}

export default customAPIFetcher