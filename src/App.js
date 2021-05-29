function App() {
  return (
    <div>
      <div style={ {
        width: '100%',
        display: 'flex',
        color: '#343a40',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: '16px',
        flexFlow: 'row wrap',
        padding: '16px 24px',
        borderBottom: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: '#e5e5e5',
        boxShadow: '0 0.25rem 0.75rem rgb(0 0 0 / 5%)',
        boxSizing: 'border-box',
        }}> 
        <div style={ {
          fontSize: '1.25rem', 
          fontWeight: '400',
          color: '#212519',
          
          }}>
          Company name
        </div>
        <div style={ {
          display: 'flex',
          fontSize: '16px',
          fontWeight: '400',   
          cursor: 'pointer'
        }}>
          <div style={{
          padding: '8px',
          }}>
            Features
          </div>
          <div style={{
          padding: '8px',
          }}>
            Enterprise
          </div>
          <div style={{
          padding: '8px',
          }}>
            Support
          </div>
          <div style={{
          padding: '8px',
          }}>
            Pricing
          </div>
        </div>
        <button style={{
          color: '#007bff',
          borderColor: '#007bff',
          border: 'solid',
          borderWidth: '1px',
          padding: '6px 12px',
          borderRadius: '.25rem',
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }}>
          Sign up
        </button>  
      </div>

      <div style={ {
          width:'100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          fontWeight: '400',   
          padding: '30px',
        }}>
          <div style={ {
            width:'100%',
            display: 'flex',
            fontWeight: '300',
            fontSize: '3.5rem',
            padding: '8px',
            justifyContent: 'center',
          }}>
            Pricing
          </div>

          <div style={ {
            width:'100%',
            display: 'flex',
            fontWeight: '300',
            fontSize: '1.25rem',
            padding: '8px',
          }}>
            Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
          </div>
        </div>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          padding: '1.25rem 1.25rem',
          boxShadow: '0 0.25rem 0.75rem rgb(0 0 0 / 5%)',
        }}>
          <div>
            <div style={{
              border: 'solid',
              textAlign: 'center',
              fontSize: '24px', 
              borderWidth: 'thin',
              borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
              borderColor: 'rgba(0,0,0,.125)',
              padding: '0.75rem 1.25rem',
              boxSizing: 'border-box',
              backgroundColor: 'rgba(0,0,0,.03)',
            }}>  
            Free
            </div>
            <div style={{
              border: 'solid',
              textAlign: 'center',
              fontSize: '24px', 
              borderWidth: 'thin',
              borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
              borderColor: 'rgba(0,0,0,.125)',
              padding: '0.75rem 1.25rem',
              boxSizing: 'border-box',
            }}>  
              <div>
                $0 / mo
              </div>
              <div style={{
                padding: '6px 12px',
                flexDirection: 'column',
                fontSize: '14px',
              }}>
                <div>
                  10 users included
                </div>
                <div>
                  2 GB of storage
                </div>
                <div>
                  Email support
                </div>
                <div>
                  Help center access
                </div>
                <button style={{
                  color: '#007bff',
                  borderColor: '#007bff',
                  border: 'solid',
                  borderWidth: '1px',
                  padding: '6px 12px',
                  borderRadius: '.25rem',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  overflow: 'visible',
                }}>
                  Sign up for free
                </button>                  
              </div>
            </div>

          </div>
          <div>
            <div style={{
              border: 'solid',
              textAlign: 'center',
              fontSize: '24px', 
              borderWidth: 'thin',
              borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
              borderColor: 'rgba(0,0,0,.125)',
              padding: '0.75rem 1.25rem',
              boxSizing: 'border-box',
              backgroundColor: 'rgba(0,0,0,.03)',
            }}>  
            Free
            </div>
            <div style={{
              border: 'solid',
              textAlign: 'center',
              fontSize: '24px', 
              borderWidth: 'thin',
              borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
              borderColor: 'rgba(0,0,0,.125)',
              padding: '0.75rem 1.25rem',
              boxSizing: 'border-box',
            }}>  
              <div>
                $15 / mo
              </div>
              <div style={{
                padding: '6px 12px',
                flexDirection: 'column',
                fontSize: '14px',
              }}>
                <div>
                  20 users included
                </div>
                <div>
                  10 GB of storage
                </div>
                <div>
                  Priority email support
                </div>
                <div>
                  Help center access
                </div>
                <button style={{
                  color: '#007bff',
                  borderColor: '#007bff',
                  border: 'solid',
                  borderWidth: '1px',
                  padding: '6px 12px',
                  borderRadius: '.25rem',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  overflow: 'visible',
                }}>
                  Get started
                </button>                  
              </div>
            </div>
          </div>

          <div>
            <div style={{
              border: 'solid',
              textAlign: 'center',
              fontSize: '24px', 
              borderWidth: 'thin',
              borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
              borderColor: 'rgba(0,0,0,.125)',
              padding: '0.75rem 1.25rem',
              boxSizing: 'border-box',
              backgroundColor: 'rgba(0,0,0,.03)',
            }}>  
            Free
            </div>
            <div style={{
              border: 'solid',
              textAlign: 'center',
              fontSize: '24px', 
              borderWidth: 'thin',
              borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
              borderColor: 'rgba(0,0,0,.125)',
              padding: '0.75rem 1.25rem',
              boxSizing: 'border-box',
            }}>  
              <div>
                $29 / mo
              </div>
              <div style={{
                padding: '6px 12px',
                flexDirection: 'column',
                fontSize: '14px',
              }}>
                <div>
                  30 users included
                </div>
                <div>
                  15 GB of storage
                </div>
                <div>
                 Phone and email support
                </div>
                <div>
                  Help center access
                </div>
                <button style={{
                  color: '#007bff',
                  borderColor: '#007bff',
                  border: 'solid',
                  borderWidth: '1px',
                  padding: '6px 12px',
                  borderRadius: '.25rem',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  overflow: 'visible',
                }}>
                  Contact us
                </button>                  
              </div>
            </div>
          </div>

        </div>
    </div>
  );
}

export default App;
