
import { appState } from '../store/index';
import  {firebaseConfig} from '../firebaseConfig'
import { doc, deleteDoc } from 'firebase/firestore';
let db: any;
let auth: any;
let storage: any;
 
export const getFirebaseInstance = async () =>  {
   if (!db) {
       const  {getFirestore} = await import('firebase/firestore')
       const  {initializeApp} = await import('firebase/app');
       const  {getAuth } = await import('firebase/auth');
	   const { getStorage } = await import('firebase/storage');

       const app = initializeApp(firebaseConfig);
       db = getFirestore(app);
       auth = getAuth(app);
	   storage = getStorage();
   }
   return  {db, auth, storage};
};

export const addSong= async (post: any) =>  {
  try {
      const { db } = await getFirebaseInstance();
      const { collection, addDoc } = await import('firebase/firestore');

      const where = collection(db, 'vinyls');
      const registerPost =  {
        albumname: post.albumname,
        author: post.author,
        price: post.price,
        stock: post.stock,
        image: post.image,
        dateadded: new Date().toISOString(),
    };

      // Añadir el post y obtener la referencia del documento creado
      const docRef = await addDoc(where, registerPost);

      console.log('Se añadió con éxito el post con ID:', docRef.id);
      
      // Retorna el ID del documento creado
      return docRef.id;
   
    
      
  } catch (error) {
      console.error('Error al añadir el documento:', error);		
      throw error; // Lanzar el error para manejarlo en la llamada
  }
};

export const getSongs = async () => {
  try {
      const { db } = await getFirebaseInstance();
      const { collection, getDocs, query, orderBy } = await import('firebase/firestore');

      const postsCollection = collection(db, 'vinyls');

      // Ordena los documentos por 'dateadded' en orden descendente
      const postsQuery = query(postsCollection, orderBy('dateadded', 'desc'));
      const querySnapshot = await getDocs(postsQuery);

      const data: any[] = [];
      querySnapshot.forEach((doc) => {
          const postData = doc.data();
          postData.id = doc.id;
          
          data.push(postData);
      });

      return data;
  } catch (error) {
      console.error('Error obteniendo los documentos:', error);
      return [];
  }
};
export const editSong = async (id: string, updatedFields: any) => {
  try {
    const { db } = await getFirebaseInstance();
    const { doc, updateDoc } = await import('firebase/firestore');

    // Obtén la referencia al documento específico por ID
    const docRef = doc(db, 'vinyls', id);

    // Actualiza los campos especificados
    await updateDoc(docRef, updatedFields);

    console.log(`El documento con ID ${id} fue actualizado con éxito.`);
    return true;  // Retorna true si se actualizó correctamente
  } catch (error) {
    console.error('Error al actualizar el documento:', error);
    throw error;  // Lanza el error para manejarlo en la llamada
  }
};

export const deleteSong = async (id: string) => {
  try {
    const { db } = await getFirebaseInstance();
    const { doc, deleteDoc } = await import('firebase/firestore');

    // Crear referencia al documento específico
    const docRef = doc(db, 'vinyls', id);

    // Eliminar el documento
    await deleteDoc(docRef);

    console.log(`El producto con ID ${id} ha sido eliminado correctamente.`);
  } catch (error) {
    console.error('Error al eliminar el producto de Firebase:', error);
    throw error; // Relanzar el error para manejarlo en otros niveles
  }
};
// export const uploadFile = async (file: File, id: string) => {
//   const { storage } = await getFirebaseInstance();
//   const { ref, uploadBytes } = await import('firebase/storage');

//   // Genera un nombre único para la imagen usando un timestamp
//   const uniqueFileName = `${id}_${Date.now()}_${file.name}`;
//   const storageRef = ref(storage, 'imagesVynils/' + uniqueFileName);

//   await uploadBytes(storageRef, file).then((snapshot) => {
//       console.log('File uploaded');
//   });

//   // Devuelve el nombre único del archivo subido, si lo necesitas para futuras referencias
//   return uniqueFileName; // Opcional, si necesitas el nombre para obtener la URL
// };

// export const getFile = async (id: string): Promise<string | null> => {
//   const { storage } = await getFirebaseInstance();
//   const { ref, getDownloadURL } = await import('firebase/storage');

//   const storageRef = ref(storage, 'imagesPosts/' + id);
  
//   try {
//       const url = await getDownloadURL(storageRef);
//       return url; // Devuelve la URL si tiene éxito
//   } catch (error) {
//       console.error(error);
//       return null; // Devuelve null si ocurre un error
//   }
// };