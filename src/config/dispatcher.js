

export const dispatcher = (res, f) => 
    async (...p) => {
        const { data } = await f(...p)
        return res.json(data)
}

