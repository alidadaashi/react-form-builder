import AppContext from '@/shared/context/appContext';
import clsx from 'clsx';
import { useContext, useEffect, useRef, useState } from 'react';
import BlockForm from '../BlockForm';
import { fieldTypes } from '@/shared/constants/fieldTypes';
const AddBlock: React.FC = () => {
  const blockClasses = clsx(
    'bg-gray-200 p-2 text-center hover:bg-gray-300 cursor-pointer flex items-center justify-center border-gray-600 h-20 rounded-md text-gray-800'
  );
  const { guestMode } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [isTypeSelected, setIsTypeSelected] = useState<
    boolean | string
  >(false);
  const parentRef = useRef(null);

  useEffect(() => {
    const handleChildClick = (
      event: React.MouseEvent<HTMLDivElement>
    ) => {
      // Check if the clicked element is a child of the parent

      const clickedDiv = event.target as HTMLDivElement;
      const clickedDivAttr = clickedDiv.getAttribute('data-value');
      if (parentRef.current && !!clickedDivAttr) {
        setIsTypeSelected(clickedDivAttr);
        console.log(
          'Clicked on a child element:',
          (event.target as HTMLElement).textContent
        );
      }
    };

    document.addEventListener('click', (event) =>
      handleChildClick(
        event as unknown as React.MouseEvent<HTMLDivElement>
      )
    );

    return () => {
      document.removeEventListener('click', (event) =>
        handleChildClick(
          event as unknown as React.MouseEvent<HTMLDivElement>
        )
      );
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(!showModal);
    setIsTypeSelected(false);
  };
  return (
    <div>
      {!guestMode && (
        <div>
          <div>
            <button
              onClick={handleCloseModal}
              className={clsx(
                'z-10 fixed right-8 bottom-8 transition-all rounded-full bg-green-700 hover:bg-green-800 w-12 h-12 text-white font-medium text-4xl flex justify-center items-center',
                showModal && 'bg-red-700 hover:bg-red-800 rotate-45 '
              )}
            >
              <span className="-mt-1">+</span>
            </button>
          </div>
          {showModal && (
            <div className="w-full h-full bg-gray-700 bg-opacity-30 fixed top-0 left-0 flex justify-center items-center">
              <div className="w-3/4 h-auto bg-white mx-auto my-32 rounded-md p-8  overflow-hidden">
                <div style={{ width: '200%' }}>
                  <div
                    className={clsx(
                      isTypeSelected && '-translate-x-110',
                      'transition-all duration-200 grid grid-cols-2 gap-8'
                    )}
                  >
                    <div>
                      <h5 className="font-semibold text-2xl mb-4 text-gray-700">
                        Add Field
                      </h5>
                      <div
                        ref={parentRef}
                        className="grid grid-cols-4 gap-8 w-50"
                      >
                        {fieldTypes.map((field) => (
                          <div
                            key={field.value}
                            data-value={field.value}
                            className={blockClasses}
                          >
                            {field.label}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 w-50 ml-4">
                      <div onClick={() => setIsTypeSelected(false)}>
                        Back
                      </div>
                      <BlockForm
                        closeModal={handleCloseModal}
                        type={isTypeSelected}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default AddBlock;
