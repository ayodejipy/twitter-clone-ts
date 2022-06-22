// components
import { useState, ChangeEvent, useEffect, useRef, FormEvent } from "react";
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, LocationMarkerIcon, XIcon } from "@heroicons/react/outline";
import UserPicture from "../../User/UserIcon"
import { PhotographIcon } from "@heroicons/react/outline"
// Emoji mart
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import { db, storage } from '@/config/Firebase';
import { addDoc, doc, collection, serverTimestamp, updateDoc } from "@firebase/firestore"
import { ref, getDownloadURL, uploadString } from "@firebase/storage";

// type 
type EmojiType = {
	id: string;
	colons: string;
	name: string;
	unified: string;
}

function AddTweet() {
	const [tweet, setTweet] = useState(" ");
	const [isFocus, setFocus ] = useState<Boolean>(false);
	const [isEmojis, setEmojis ] = useState<Boolean>(false);
	const [loading, setLoading] = useState(false)
	
	const [selectedFile, setSelectedFile] = useState<null|string>(null);
	const filePickerRef = useRef<HTMLInputElement>(null)
	
	const toggleImageSelect = (e: FormEvent<HTMLInputElement>) => {
		filePickerRef.current?.click()
	}
	
	const addImage = () => {}
	
	
	// come back to understanding this
	const addEmoji = (e: EmojiType) => {
		let sym = e.unified.split('-')
		let emojiCodes = [] as String[]
		sym.forEach((el: string) => emojiCodes.push('0x' + el))
		let emoji = String.fromCodePoint(...emojiCodes)
		setTweet(tweet + emoji);
	}
	
	const sendTweet = async () => {
		if(loading) return;
		setLoading(true);
		
		// add new document
		const newDocument = await addDoc(collection(db, 'posts'), {
			// id: session.user.uuid,
			// username: session.user.name,
			// userImg: session.user.image,
			// tag: session.user.tag,
			text: tweet,
			timestamp: serverTimestamp()
		})
		
		const imageRef = ref(storage, `posts/${newDocument.id}/image`);
		
		if(selectedFile) {
			await uploadString()
		}
		
		
		
	}
	
	
	return (
		<div className={`flex space-x-3 p-3 border-b border-gray-700`}>
			<UserPicture />
			
			<div className="w-full divide-y divide-gray-700">
				<div className={`${selectedFile && 'pb-7'} ${tweet && "space-y-2.5"}`}>
					<textarea 
						value={tweet} 
						name="" 
						id=""
						rows={3}
						onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTweet(e.target.value)}
						onFocus={() => setFocus(true)}
						placeholder="What's happening?"
						className="bg-transparent min-h-[60px] outline-none w-full text-twitter-gray text-lg placeholder:text-gray-500 tracking-wide"
					> </textarea>
					
					{/* selected image */}
					{selectedFile && (
						<div className="relative">
							<div 
								className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#262c27] bg-opacity-75 rounded-full flex justify-center items-center top-1 left-1 cursor-pointer"
								onClick={() => {} }
							>
								<XIcon className="text-white h-5" />
							</div>
							
							<img 
								src={selectedFile} 
								alt="image" 
								className="rounded-2xl max-h-80 object-contain" 
							/>
						</div>
					)}				
				</div>
				
				{/* icons */}
				<div className="flex items-center justify-between pt-2.5 ">
					<div className="flex items-center">
						<div className="icon" onClick={(e: FormEvent) => toggleImageSelect(e)}>
							<PhotographIcon className="h-6 text-twitter-icon" />
							<input type='file' hidden ref={filePickerRef} />
						</div>
						<div className="icon rotate-90">
							<ChartBarIcon className="h-6 text-twitter-icon" />
						</div>

						<div className="icon" onClick={() => setEmojis(!isEmojis)}>
							<EmojiHappyIcon className="h-6 text-twitter-icon" />
						</div>

						<div className="icon">
							<CalendarIcon className="h-6 text-twitter-icon" />
						</div>
						<div className="icon">
							<LocationMarkerIcon className="h-6 text-twitter-icon" />
						</div>
						
						{ isEmojis && (
							<Picker
								onSelect={addEmoji}
								style={{ 
									position: "absolute",
									marginTop: "465px",
									marginLeft: -40,
									maxWidth: "320px",
									borderRadius: "20px",
								}} 
								theme="dark"	
							/>
						)}
					</div>
					
					<button
						className="bg-twitter-button text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-opacity-50 disabled:hover:bg-twitter-gray disabled:opacity-50 disabled:cursor-default"
						disabled={!tweet.trim() && !selectedFile}
						onClick={sendTweet}
					>
						Tweet
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddTweet;
