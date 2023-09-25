
export default function Home() {

  const [image_url,setImage_url] = useState("/");
  let inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const imageGenerator = async () =>{
      if (inputRef.current.value==="") {
          return 0;
      }
      setLoading(true);
      const response = await fetch (
          "https://api.openai.com/v1/images/generations",
          {
              method: "POST",
              headers:{
                  "Content-Type":"application/json",
                  Authorization:
                  "Bearer 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", //need to add to env
                  "User-Agent":"Chrome"
              },
              body:JSON.stringify({
                  prompt: `${inputRef.current.value}`,
                  n:1,
                  size:"512x512",
              })
          }
      );
      let data = await response.json();
      let data_array = data.data;
      setImage_url(data_array[0].url);
      setLoading(false);
  }

  return (
 
    <div className={styles.container}>

    </div>
  )
}
