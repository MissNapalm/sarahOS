import React from "react";

export const AboutMeContent = () => (
  <div style={{
    padding: '40px',
    color: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '800px',
    margin: '0 auto',
  }}>
    <div style={{
      display: 'flex',
      gap: '40px',
      marginBottom: '40px',
    }}>
      <div style={{
        fontSize: '120px',
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}>
        👩‍💻
      </div>
      
      <div style={{ flex: 1 }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '15px',
          background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Sarah Clark
        </h1>
        <h2 style={{
          fontSize: '20px',
          color: 'rgba(255, 255, 255, 0.7)',
          marginBottom: '20px',
        }}>
          Frontend Developer & Security Specialist
        </h2>
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }}>
          {['Frontend', 'Security', 'React', 'UI/UX'].map(tag => (
            <span key={tag} style={{
              padding: '6px 12px',
              borderRadius: '15px',
              background: 'rgba(255, 255, 255, 0.1)',
              fontSize: '14px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div style={{
      background: 'rgba(255, 255, 255, 0.03)',
      padding: '30px',
      borderRadius: '20px',
      marginBottom: '30px',
    }}>
      <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
        Hello! I'm a passionate frontend developer with a unique twist - I specialize in creating beautiful, 
        intuitive web interfaces while maintaining a strong focus on security. With experience in web development 
        and security practices, I bridge the gap between aesthetics and protection.
      </p>
      <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
        I began studying cybersecurity and hacking while working as a caregiver for my father, then moved on to 
        REST APIs, full stack applications, and finally frontend design. This diverse background gives me a unique 
        perspective on creating secure, user-friendly applications.
      </p>
      <p style={{ lineHeight: '1.6' }}>
        When I'm not coding or exploring security concepts, I contribute to open-source projects and mentor 
        aspiring developers. I believe in making technology both beautiful and secure, ensuring that users can 
        trust the applications they interact with.
      </p>
    </div>
  </div>
);

export const SkillsContent = () => (
  <div style={{ 
    padding: '40px',
    color: 'rgba(255, 255, 255, 0.9)',
    background: 'radial-gradient(circle at right bottom, rgba(0, 0, 0, 0.2) 0%, transparent 70%)'
  }}>
    {['Frontend Development', 'Security Expertise', 'Backend & Tools'].map((category, index) => (
      <div key={category} style={{
        background: `linear-gradient(${120 * index}deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)`,
        padding: '30px',
        borderRadius: '15px',
        marginBottom: '30px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          marginBottom: '20px',
          color: '#fff'
        }}>{category}</h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '15px',
          marginBottom: '20px'
        }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{
              height: '6px',
              background: `linear-gradient(to right, rgba(255, 255, 255, 0.3) ${80 + i * 5}%, rgba(255, 255, 255, 0.1) ${80 + i * 5}%)`,
              borderRadius: '3px'
            }}/>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const EthicalHacksContent = () => (
    <div style={{
      padding: '40px',
      color: 'rgba(255, 255, 255, 0.9)',
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)'
    }}>
      <h1 style={{
        fontSize: '32px',
        marginBottom: '30px',
        textAlign: 'center',
        color: '#fff'
      }}>Ethical Hacks</h1>
  
      <div style={{ lineHeight: '1.8' }}>
        <p style={{ marginBottom: '20px' }}>
          My journey in ethical hacking is defined by a deep curiosity and commitment to protecting users and organizations. Below is a comprehensive list of ethical hacks I’ve performed, detailing the methods, lessons, and impact of each.
        </p>
  
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
          <li>
            <strong>Intercepting and Decrypting Web Traffic:</strong> Simulated man-in-the-middle attacks to understand how attackers could intercept sensitive data. This project highlighted the importance of SSL/TLS and certificate pinning for secure communication.
          </li>
          <li>
            <strong>Backdooring Android Phones:</strong> Demonstrated how malicious APK files could bypass basic security to access SMS history and call logs. This exercise underscored the need for robust app verification processes and endpoint protection.
          </li>
          <li>
            <strong>Stealing Credentials from Memory:</strong> Exploited memory scraping techniques on Windows 10 to recover Wi-Fi credentials, website logins, and sensitive personal data. The project emphasized the importance of memory encryption and access control.
          </li>
          <li>
            <strong>Deauthentication Attacks:</strong> Conducted Wi-Fi deauthentication attacks to highlight vulnerabilities in wireless networks. The demonstration focused on rogue access points and the need for WPA3 security protocols.
          </li>
          <li>
            <strong>Tracing Cybercriminals via Wiretap:</strong> Analyzed a simulated wiretap to trace a suspect. This task combined packet analysis and OSINT techniques, demonstrating how data streams can be used to identify malicious actors.
          </li>
          <li>
            <strong>Boardlight Hack with Exploits:</strong> Developed multi-layered exploits for a mock IoT board system. This highlighted the dangers of insecure firmware and reinforced the importance of secure-by-design principles for IoT devices.
          </li>
          <li>
            <strong>Hiding Backdoors in Files:</strong> Demonstrated how attackers could embed backdoors in legitimate files to bypass updated antivirus systems. The project stressed the need for advanced anomaly detection and proactive security measures.
          </li>
          <li>
            <strong>IP Tracing and Geolocation:</strong> Used IP addresses to geolocate targets and demonstrate privacy vulnerabilities. This exercise reinforced the importance of VPNs and anonymization for personal security.
          </li>
          <li>
            <strong>Wi-Fi Handshake Theft:</strong> Captured WPA2 handshakes to illustrate the risks of weak passwords and outdated encryption standards. This project underscored the necessity of secure passphrases and regular updates to wireless security.
          </li>
          <li>
            <strong>Wi-Fi Jamming with Flipper Zero:</strong> Simulated Wi-Fi jamming attacks to showcase vulnerabilities in unprotected networks. The exercise emphasized secure protocols and frequency hopping techniques.
          </li>
          <li>
            <strong>Phishing Scams to Defeat 2FA:</strong> Designed phishing campaigns to bypass two-factor authentication by stealing session tokens. This highlighted the importance of phishing-resistant 2FA methods, like hardware tokens.
          </li>
          <li>
            <strong>Decrypting Browser History:</strong> Recovered and decrypted browser history files to demonstrate risks of unencrypted local storage. The project reinforced best practices for securing cached data.
          </li>
          <li>
            <strong>OSINT Investigations:</strong> Leveraged publicly available information to demonstrate how seemingly harmless data can be weaponized. This task showcased the risks of oversharing and the value of digital privacy.
          </li>
          <li>
            <strong>Fork Bomb Exploits:</strong> Simulated fork bomb attacks to crash systems, illustrating the risks of uncontrolled processes. This emphasized the importance of resource quotas and robust monitoring systems.
          </li>
        </ul>
  
        <p style={{ marginTop: '20px' }}>
          Each of these projects was conducted in a controlled, ethical environment and served as a learning tool for understanding security vulnerabilities. These efforts demonstrate the value of proactive security testing and the importance of addressing potential threats before they are exploited. I am proud of these accomplishments and remain committed to responsible, impactful work in cybersecurity.
        </p>
      </div>
    </div>
  );
  
  

export const NonprofitContent = () => (
  <div style={{
    padding: '40px',
    color: 'rgba(255, 255, 255, 0.9)',
    background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)'
  }}>
    <div style={{
      textAlign: 'center',
      marginBottom: '40px'
    }}>
      <h1 style={{
        fontSize: '32px',
        marginBottom: '15px',
        color: '#fff'
      }}>Digital Justice Initiative</h1>
      <p style={{
        fontSize: '18px',
        color: 'rgba(255, 255, 255, 0.7)',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        Developing forensic software tools for law enforcement agencies
      </p>
    </div>

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      {[
        { name: 'Evidence Tracker Pro', status: 'Deployed' },
        { name: 'Mobile Analysis Suite', status: 'Development' },
        { name: 'Community Security Platform', status: 'Beta' }
      ].map((project, index) => (
        <div key={index} style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '25px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{project.name}</h3>
            <span style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              {project.status}
            </span>
          </div>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: project.status === 'Deployed' ? '#4CAF50' : 
                       project.status === 'Development' ? '#FFC107' : '#2196F3'
          }}/>
        </div>
      ))}
    </div>
  </div>
);

export const SettingsContent = () => (
  <div style={{
    padding: '40px',
    color: 'rgba(255, 255, 255, 0.9)',
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)'
  }}>
    <h1 style={{
      fontSize: '32px',
      marginBottom: '30px',
      textAlign: 'center',
      color: '#fff'
    }}>Settings</h1>

    <div style={{
      display: 'grid',
      gap: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      {['Dark Mode', 'Startup Sound', 'Notifications'].map((setting, index) => (
        <div key={index} style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '20px',
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <span>{setting}</span>
          <div style={{
            width: '44px',
            height: '24px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '2px',
              left: '2px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.9)',
              transition: 'transform 0.2s'
            }}/>
          </div>
        </div>
      ))}
    </div>
  </div>
);