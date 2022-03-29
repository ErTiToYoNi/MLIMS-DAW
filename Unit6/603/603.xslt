<?xsl version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
        <xsl:apply-templates />
    </xsl:template>

    <xsl:template match="name" >   
    </xsl:template>

    <xsl:template match="web" >
    </xsl:template>

    <xsl:template match ="//cycle">
        <xsl:value-of select="name"/>
    </xsl:template>

</xsl:stylesheet>

<?xsl version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
    <html>
        <body>
        <xsl:apply-templates />
        </body>
    </html>
    </xsl:template>

    <xsl:template match="name" >   
    </xsl:template>

    <xsl:template match="web" >
    </xsl:template>

    <xsl:template match ="//cycle">
       <p> <xsl:value-of select="name"/> </p>
    </xsl:template>
    
</xsl:stylesheet>

<?xsl version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
    <html>
        <body>
            <ul>
        <xsl:apply-templates />
        </ul>
        </body>
    </html>
    </xsl:template>

    <xsl:template match="name" >   
    </xsl:template>

    <xsl:template match="web" >
    </xsl:template>

    <xsl:template match ="//cycle">
       <li> <xsl:value-of select="name"/> </li>
    </xsl:template>
    
</xsl:stylesheet>

<?xsl version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/">
    <html>
        <body>
            <table>
                <xsl:apply-templates />
            </table>
        </body>
    </html>
    </xsl:template>

    <xsl:template match="name" >   
    </xsl:template>

    <xsl:template match="web" >
    </xsl:template>

    <xsl:template match ="//cycle">
       <tr>><td> <xsl:value-of select="name"/></td> </tr>
    </xsl:template>
    
</xsl:stylesheet>