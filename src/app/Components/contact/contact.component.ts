import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
 name : string = "";
 email : string = "";
 phone : string = "";
 msg : string = "";
  public sendEmail(e: Event) {
   

    emailjs
      .sendForm('service_s0mip3i', 'template_b8hkd9t', e.target as HTMLFormElement, {
        publicKey: 'ewz6Nv6RlAEMIFQ6d',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          Swal.fire({
            title: 'Envoyé!',
            text: 'Message envoyé avec succès',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
        },
        (error) => {
          // console.log('FAILED...', (error as EmailJSResponseStatus).text);
          Swal.fire({
            title: 'Echoué!',
            text: 'Erreur,réssayer',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        },
      );
      this.name = "";
      this.email = "";
      this.phone = "";
      this.msg = "";
  }
}


