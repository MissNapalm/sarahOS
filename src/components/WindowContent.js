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
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)',
      maxWidth: '900px',
      margin: '0 auto',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    }}>
      <h1 style={{
        fontSize: '32px',
        marginBottom: '30px',
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}>Skills</h1>
  
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        lineHeight: '1.8',
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '15px', color: '#fff' }}>Software Development</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
            Proficient in modern development techniques, creating robust and scalable solutions tailored for real-world use.
          </p>
        </div>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '15px', color: '#fff' }}>JavaScript & React</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
            Expertise in building dynamic, user-friendly interfaces with React and utilizing JavaScript for seamless functionality.
          </p>
        </div>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '15px', color: '#fff' }}>Python & PostgreSQL</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
            Skilled in Python for backend development and PostgreSQL for efficient, reliable database management.
          </p>
        </div>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '15px', color: '#fff' }}>Linux & Networking</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
            Proficient in Linux systems and network engineering, including configuring mail servers and securing infrastructure.
          </p>
        </div>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '15px', color: '#fff' }}>Security Counseling</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
            Experienced in advising clients on robust security practices to safeguard against vulnerabilities and cyber threats.
          </p>
        </div>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '15px', color: '#fff' }}>Ethical Hacking & Research</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
            Conducting responsible hacking projects to uncover vulnerabilities and strengthen system defenses.
          </p>
        </div>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <h2 style={{ fontSize: '20px', marginBottom: '15px', color: '#fff' }}>Vulnerability Scanning</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
            Skilled in identifying security gaps using advanced tools, ensuring robust protection against potential exploits.
          </p>
        </div>
      </div>
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
  
      <div style={{ lineHeight: '1.8', marginBottom: '20px' }}>
        <p>
          My journey into ethical hacking has been defined by curiosity, responsibility, and a commitment to improving security. I’ve conducted numerous projects that emulate real-world attacks, always within legal and ethical boundaries. These efforts are driven by a desire to understand vulnerabilities deeply and help organizations strengthen their defenses. Below are some of the ethical hacks I’ve performed and the lessons they taught me.
        </p>
      </div>
  
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {[
                      {
                        title: "Exploited Lax MIME type handling to hijack session cookies",
                        description: "Exploited lax MIME type handling in web browsers to execute hidden JavaScript code. The exercise underscored the critical need for strict MIME type enforcement and robust web application security.",
                      },
                      {
                        title: "Evaded Linux and Windows Antivirus by Hiding Backdoors in Files",
                        description: "Demonstrated how attackers could hide backdoors in legitimate files to bypass fully updated antivirus systems. This reinforced the need for advanced anomaly detection tools."
                      },
                      {
                        title: "Built a hacking lab demonstrating how SQL injection CVEs can lead to a ransomware attack",
                        description: "Built an ethical hacking lab demonstrating how a website can be hacked and defaced. I went beyond the project scope by also adding in the ability to compromise the server itself and upload fake ransomware."
                      },
                      {
                        title: "Using AI to find a privilege escalation vector and rooting a Linux laptop",
                        description: "Used AI to scan my Linux Mint laptop for security holes I could use to escalate my privileges. Then I used AI to locate a security hole in Vim that I used to root the machine."

                      },
          {
            title: "Using Wireshark to Decrypt Web Traffic and Spy on Devices",
            description: "Captured the 4-way handshake when a laptop connected to the wifi network, then used the PSK to decrypt and analyze network traffic. This project highlighted the need for additional DNS security, and how easily our privacy can disappear."
          },
          {
            title: "Backdooring Android Phones",
            description: "Demonstrated how malicious APK files could bypass basic security to access SMS history and call logs. This exercise underscored the need for robust app verification processes."
          },
          {
            title: "Stealing Credentials from Memory",
            description: "Exploited memory scraping techniques on Windows 10 to recover Wi-Fi credentials, social security numbers, and more. The project emphasized the importance of memory encryption and access controls."
          },
          {
            title: "Fork Bomb Exploits",
            description: "Simulated a fork bomb to crash systems, showcasing the dangers of uncontrolled processes. The project reinforced the importance of resource quotas and monitoring."
          },
          {
            title: "Deauthentication Attacks",
            description: "Performed Wi-Fi deauthentication attacks to showcase network vulnerabilities and the risks of rogue access points. This hack educated users about WPA3 and anti-deauth measures."
          },
          {
            title: "Tracing Cybercriminals via Wiretap",
            description: "Analyzed a simulated wiretap to identify and trace a suspect. This task involved packet analysis and highlighted the potential of OSINT for attribution."
          },
          {
            title: "Hackthebox Capture-the-Flag: 'Boardlight'",
            description: "Compromised a web server through the 'dirty pipe' exploit, then used LinPEAS to find an additional CVE and get root access to the machine."
          },
          {
            title: "IP Tracing and Geolocation",
            description: "Used stolen IP addresses to demonstrate how attackers might geolocate targets. This exercise emphasized privacy risks and the importance of VPNs."
          },
          {
            title: "Wi-Fi Handshake Theft",
            description: "Captured WPA2 handshakes to illustrate the risks of weak passwords and outdated encryption standards. The project underscored the critical role of secure passphrases."
          },
          {
            title: "Wi-Fi Jamming with Flipper Zero",
            description: "Simulated Wi-Fi jamming attacks to showcase the vulnerabilities of unprotected networks. It highlighted the importance of frequency hopping and secure protocols."
          },
          {
            title: "Decrypting Browser History",
            description: "Recovered and decrypted browser history files to demonstrate the potential risks of unencrypted local storage. It reinforced the importance of securing cached data."
          },
          {
            title: "OSINT Investigations",
            description: "Used open-source intelligence techniques to uncover publicly available data on mock targets. This exercise showed how seemingly harmless information can be weaponized."
          },
        ].map((hack, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '15px',
            padding: '25px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h3 style={{
              fontSize: '20px',
              marginBottom: '15px',
              color: '#fff'
            }}>{hack.title}</h3>
            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              {hack.description}
            </p>
          </div>
        ))}
      </div>
  
      <div style={{ marginTop: '30px', lineHeight: '1.8' }}>
        <p>
          These projects were conducted in controlled environments with the utmost respect for ethical guidelines. By identifying and demonstrating vulnerabilities, my goal is to educate and empower organizations to stay ahead of potential threats. Each hack taught me invaluable lessons about security and resilience, reinforcing my commitment to responsible and impactful work.
        </p>
        <p>
          I am proud of these achievements, but I remain humble and aware of the evolving nature of cybersecurity. There is always more to learn, and I approach every new project with the same curiosity and dedication that first drew me to this field.
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