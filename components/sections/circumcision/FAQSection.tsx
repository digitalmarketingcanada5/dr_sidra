'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { AccordionItem } from '@/components/ui/Accordion';

export const FAQSection: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Full Width Content */}
        <div className="bg-[#f0f8ff] p-8 md:p-12 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-[#003e69] mb-6">
            Circumcision Considerations and Research
          </h2>
          <div className="prose max-w-none text-gray-700 space-y-4 mb-8">
            <p>
              Each year, there are over a million circumcisions performed in North America. 
              Newborn circumcision, when performed properly, is quick and safe. The medical 
              benefits accrue from infancy through old age.
            </p>
            <p>
              Our position (as well as the position of medical organizations) is that when 
              parents are making a decision about circumcision, they should be advised of the 
              present state of medical knowledge about its benefits and considerations. Their 
              decision may ultimately be based on personal, religious, or cultural factors.
            </p>
            <p>
              For more information on circumcision, please consult with our medical professionals 
              who can provide you with the latest research and guidance specific to your family's needs.
            </p>
          </div>

          {/* Accordion Questions */}
          <div className="mb-8">
            <AccordionItem title="Why do so many families choose our clinic for circumcision?">
              <p>
                Families choose Nexus Medical Centre for circumcision because of our dedicated focus 
                on providing gentle, professional care for infants.
              </p>
              <p>
                Our procedures use extensive pain control methods including appropriate topical anesthetics 
                and local anesthetic injections to ensure your baby's comfort.
              </p>
              <p>
                We maintain extremely low complication rates through our careful, professional approach.
              </p>
            </AccordionItem>

            <AccordionItem title="Why do parents choose to circumcise their sons?">
              <p>
                An infant circumcision is often undertaken for cultural and religious reasons, and there 
                can be health benefits as well.
              </p>
              <p>
                Many families circumcise their babies in accordance with their traditions, or to carry 
                on family custom. Some potential health considerations include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>It may reduce the risk of urinary tract infection.</li>
                <li>It may reduce the risk of penile infection.</li>
                <li>It eliminates the need for circumcision later in life when complications are more common.</li>
                <li>Some studies suggest reduced risk of certain sexually transmitted diseases.</li>
                <li>May have protective factors for certain conditions.</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Why do some parents choose not to circumcise their sons?">
              <p>They may be concerned about performing a procedure on an otherwise healthy baby.</p>
              <p>They wonder whether their child will wish he had not been circumcised later in life.</p>
              <p>Some parents prefer not to follow cultural and religious traditions.</p>
              <p>They may want to research medical considerations more thoroughly before deciding.</p>
            </AccordionItem>
          </div>

          <h2 className="text-3xl font-semibold text-[#003e69] mb-6">Circumcision FAQ</h2>
          <div>
            <AccordionItem title="What is Circumcision?" titleIcon={true}>
              <p>
                Circumcision is a simple operation that involves removal of the foreskin that sheaths 
                the head of the penis. There are different methods used today for circumcision and the 
                application of anesthesia.
              </p>
              <p>
                Our clinic uses gentle, modern techniques that prioritize your baby's comfort and safety.
              </p>
            </AccordionItem>

            <AccordionItem title="Why Circumcise?" titleIcon={true}>
              <p>
                Parents sometimes ask about why circumcision should be done. The decision on why to 
                circumcise is a personal one that will be made within your family based on your 
                traditions and values.
              </p>
              <p>
                There are some potential health benefits to male infant circumcision and there are 
                also reasons families choose not to circumcise baby boys.
              </p>
              <p>
                Our recommendation is that you make as informed a decision as possible. Circumcision 
                is part of both Judaism and Islam, and many Christians and people of other religious 
                backgrounds also choose circumcision for health, cosmetic reasons, or to continue 
                family tradition.
              </p>
            </AccordionItem>

            <AccordionItem title="What can I expect during the procedure?" titleIcon={true}>
              <p>
                Our circumcision method minimizes discomfort for the patient via application of multiple 
                modalities to ensure comfort, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Appropriate pre-procedure preparation</li>
                <li>Numbing cream applied before anesthetic injection</li>
                <li>Local anesthetic that removes feeling from the area</li>
                <li>Comfort measures to keep baby calm</li>
              </ul>
              <p className="font-semibold mt-4">
                All these steps are fully covered by our service fees.
              </p>
              <p>
                Additionally, our doctor also controls environmental factors in the procedure room to 
                maximize the patient's comfort. We maintain the temperature at a warm and comfortable 
                level and provide a calm atmosphere during the procedure.
              </p>
            </AccordionItem>
          </div>
        </div>
      </div>
    </Section>
  );
};
