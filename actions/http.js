import axios from "axios";

export async function SearchAnime(data){
    try{ 
        
        const response = await axios.get(`https://consumet-api.herokuapp.com/anime/gogoanime/${data}`,  {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        return response.data;
    }catch(e){
        return e;
    }
   
}
export async function getinfo(data){
    try{ 
        
        const response = await axios.get(`https://consumet-api.herokuapp.com/anime/gogoanime/info/${data}`,  {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        return response.data;
    }catch(e){
        return e;
    }
   
}

export async function getTrending(){
   
    try
    {
        const response = await axios.post('https://consumet-api.herokuapp.com/meta/anilist/trending', {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        return response.data;
    }catch(e){
        return ['https://i.pinimg.com/736x/16/65/ee/1665ee47b8a2c8954418fdf64689da41.jpg']
    }
}
export async function getChapter(data){
    data = JSON.stringify(data)
    try
    {
        const response = await axios.post('https://jujustu.herokuapp.com/manga/chapterdata', data, {
            headers: {
            'Content-Type': 'application/json'
            }
        });
        return response.data;
    }catch(e){
        return ['https://i.pinimg.com/736x/16/65/ee/1665ee47b8a2c8954418fdf64689da41.jpg']
    }
}
export async function getMangaData(){
   try
    {
        const response = await axios.get("https://jujustu.herokuapp.com/mangadata");
        return response.data;
    }catch(e){
        return [{"title": "No Data Found", "manga": []}]
    }
}
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36";
export async function getAnimeVideoLink(id){
    try {
        const data = await axios.get(`https://consumet-api.herokuapp.com/anime/gogoanime/watch/${id}`, {
            headers: {
                'User-Agent': USER_AGENT,
                'X-Requested-With': 'XMLHttpRequest',
            },
        });
        return data.data;
    } catch (error) {
        return [];
    }
}