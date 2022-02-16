<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
        <html>
            <body>
                <ul>
                <xsl:apply-templates/>
                </ul>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="/secondary-school" >
        <h1><xsl:value-of select="name"/></h1>
        <p>Web page:
            <a>
                <xsl:attribute name="href" >
                    <xsl:value-of select="web"/>
                </xsl:attribute>
                http://www.iesabastos.org 
            </a>
        </p>
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="//cycle" >
        <li><xsl:value-of select="name"/></li>
    </xsl:template>
    
    <xsl:template match="name" >
    </xsl:template>

    <xsl:template match="web" >
    </xsl:template>
</xsl:stylesheet>
