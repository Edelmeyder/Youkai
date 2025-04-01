import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})
export class FirebaseService {
	constructor(private firestore: Firestore) { }

	async testConnection() {
		try {
			const testDocRef = doc(this.firestore, 'test/' + Date.now());
			await setDoc(testDocRef, {
				message: 'Conexión exitosa!',
				timestamp: new Date()
			});
			console.log('Documento escrito correctamente');
		} catch (e) {
			console.error('Error de Firestore:', e);
		}
	}
}
