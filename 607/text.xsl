<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="text" omit-xml-declaration="yes" indent="no"/>

<xsl:template match="/">
Marks from // <xsl:value-of select="//name[.='Markup languages']"/>//
---------------------------------
<xsl:apply-templates/>
</xsl:template>

<xsl:template match="student">
<xsl:value-of select="name"/><xsl:text> </xsl:text> <xsl:value-of select="lastname"/>: <xsl:value-of select="credits/credit[name='Markup languages']/mark"/>

</xsl:template>
</xsl:stylesheet>